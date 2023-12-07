import React from "react";
import "../style/Messaging.css";

import { useState, useEffect, useRef } from "react";

export function MessageHistory({messages}) {

  const scrollContainerRef = useRef(null);

  const MessageBubble = ({ content, sender }) => (
    <div className={sender === "user" ? "senderBubble" : "otherBubble"}>
      {content}
    </div>
  );

  useEffect(() => {
    scrollContainerRef.current.scrollTop =
      scrollContainerRef.current.scrollHeight;
  }, []);

  return (
    <div class="scrollContainer" ref={scrollContainerRef}>
      {messages.map((message) => (
        <div
          className={message.sender === "user" ? "senderBubble" : "otherBubble"}
          key={message.id}
        >
          {message.content}
        </div>
      ))};

     
    </div>
  );
}
