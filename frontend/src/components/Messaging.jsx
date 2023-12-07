import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import "../style/Messaging.css";

import { MessageRegistry } from "./MessageRegistry";
import { MessageHistory } from "./MessageHistory";
import { MessageUsers } from "./MessageUsers";

/* Added to shorten preview of most recent message to 6 characters. If more
than 6 are present, ellipses are used.
*/
const shortPrev = (text) => {
  return text.length > 6 ? text.slice(0, 6) + "..." : text;
};

//Mocked structure of a user's messages
const mockMessages = {
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

//Mocked structure of users being messaged
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

//Used to update preview to display on sidebar
const updatePreviews = (users, messages) =>
  users.map((user) => ({
    ...user,
    preview: shortPrev(messages[user.id][messages[user.id].length - 1].content),
  }));

//Updates user messages to contain preview of most recent message
mockUsers = updatePreviews(mockUsers, mockMessages);

/** This is the high-level messaging handler. It
 *
 * */

export function Messaging() {
  const [selectedUser, setSelectedUser] = useState(null);

  //probably not necessary in tsx
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div class="all">
      <div class="nav">
        <NavBar />
      </div>

      <div className="page">
        <div class="leftScreen">
          <MessageUsers users={mockUsers} onSelectUser={handleSelectUser} />
        </div>

        <div class="openMsg">
          <div class="info">
            <img class="pfp" src="https://via.placeholder.com/75x75" />

            <h2 class="sendTo">
              {selectedUser ? selectedUser.name : "Select a user"}
            </h2>
          </div>

          <div class="sendBorder">
            <MessageHistory
              messages={selectedUser ? mockMessages[selectedUser.id] : []}
            />
            <div class="messageHolder">
              <MessageRegistry selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
