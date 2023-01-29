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
  const reference = useRef()

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
    reference.current.scrollIntoView({behavior: 'smooth'})
  };


  return (
    <>
      <div>
        {messages &&
          messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
      </div>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">
          <BiSend />
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
