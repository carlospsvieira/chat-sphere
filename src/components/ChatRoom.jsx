import React, { useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import {
  collection,
  orderBy,
  query,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { BiSend } from "react-icons/bi";

function ChatRoom() {
  const [formValue, setFormValue] = useState("");
  const reference = useRef();

  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    reference.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-6 py-4 flex-1 bg-white overflow-auto">
      <div className="mt-4">
        {messages &&
          messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
        <div ref={reference} />
      </div>

      <form
        className="mt-6 border-t border-gray-300 pt-4"
        onSubmit={sendMessage}
      >
        <div className="flex">
          <input
            className="w-full px-4 py-2 text-sm border border-gray-400 rounded"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-500"
            type="submit"
          >
            <BiSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatRoom;
