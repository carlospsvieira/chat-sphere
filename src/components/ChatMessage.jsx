import React from "react";
import { auth } from "../firebase";

function ChatMessage(props) {
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
  <p>
    {text}
  </p>
  );
}

export default ChatMessage;
