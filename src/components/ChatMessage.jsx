import React from "react";
import { auth } from "../firebase";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`flex py-3 px-3 mb-3 text-sm font-medium text-black rounded-lg ${messageClass}`}>
    <img src={photoURL} alt="avatar" className="w-12 h-12 rounded-full"/>
    <p className="ml-3 text-xl">{text}</p>
  </div>
  );
}

export default ChatMessage;
