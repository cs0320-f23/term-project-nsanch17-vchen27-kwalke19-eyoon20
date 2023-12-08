import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";
import { MessageRegistry } from "./MessageRegistry";
import { MessageHistory } from "./MessageHistory";
import { MessageUsers } from "./MessageUsers";
import "../../style/Messaging.css";



// Define types for users and messages
interface User {
  id: number;
  name: string;
  profilePicture: string;
  timestamp: string;
  preview?: string; // Add optional preview property
}

interface Message {
  id: number;
  sender: string;
  content: string;
}

// Mocked structure of a user's messages
const mockMessages: Record<number, { id: number; sender: string; content: string }[]> = {
  1: [
    { id: 1, sender: "other", content: "Hello Anil!" },
    { id: 2, sender: "user", content: "Hi there!" },
  ],
  2: [
    { id: 1, sender: "other", content: "Hi Rachelle!" },
    { id: 2, sender: "user", content: "No way!" },
  ],
  3: [
    { id: 1, sender: "other", content: "Hi Sarah!" },
    { id: 2, sender: "user", content: "Amazing!" },
  ],
};

// Mocked structure of users being messaged
var mockUsers = [
  {
    id: 1,
    name: "Anil",
    profilePicture: "https://via.placeholder.com/50x50",
    timestamp: "Today, 9:52pm",
  },
  {
    id: 2,
    name: "Rachelle",
    profilePicture: "https://via.placeholder.com/50x50",
    timestamp: "Today, 9:02pm",
  },
  {
    id: 3,
    name: "Sarah",
    profilePicture: "https://via.placeholder.com/50x50",
    timestamp: "Today, 9:12pm",
  },
];

// Added to shorten preview of most recent message to 6 characters. If more
// than 6 are present, ellipses are used.
const shortPrev = (text: string) => {
  return text.length > 6 ? text.slice(0, 6) + "..." : text;
};

// Used to update preview to display on sidebar
const updatePreviews = (
  users: User[],
  messages: Record<number, Message[]>
): User[] =>
  users.map((user) => ({
    ...user,
    preview: shortPrev(messages[user.id][messages[user.id].length - 1].content),
  }));

// Updates user messages to contain preview of most recent message
mockUsers = updatePreviews(mockUsers, mockMessages);

export function Messaging() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user:User) => {
    setSelectedUser(user);
  };

  return (
    <div className="all">
      <div className="nav">
        <NavBar />
      </div>

      <div className="page">
        <div className="leftScreen">
          <MessageUsers users={mockUsers} onSelectUser={handleSelectUser} />
        </div>

        <div className="openMsg">
          <div className="info">
            <img
              className="pfp"
              src="https://via.placeholder.com/75x75"
              alt="Profile"
            />

            <h2 className="sendTo">
              {selectedUser ? selectedUser.name : "Select a user"}
            </h2>
          </div>

          <div className="sendBorder">
            <MessageHistory
              messages={selectedUser ? mockMessages[selectedUser.id] : []}
            />
            <div className="messageHolder">
              <MessageRegistry />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Messaging;