import React from "react";
import "../../style/Messaging.css";
import "../../style/App.css";

import { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  sender: string;
  content: string;
}

interface MessageBubbleProps {
  content: string;
  sender: string;
}

interface MessageHistoryProps {
  messages: Message[];
}

const MessageBubble = ({ content, sender }: MessageBubbleProps) => (
  <div className={sender === "user" ? "senderBubble" : "otherBubble"}>
    {content}
  </div>
);

export const MessageHistory = ({ messages }: MessageHistoryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="scrollContainer" ref={scrollContainerRef}>
      {messages.map((message) => (
        <div
          className={message.sender === "user" ? "senderBubble" : "otherBubble"}
          key={message.id}
        >
          {message.content}
        </div>
      ))}
      
    </div>
  );
};
