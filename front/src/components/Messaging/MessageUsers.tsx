import React, { useState } from "react";
import "../../style/Messaging.css";

interface User {
  id: number;
  name: string;
  preview?: string;
  profilePicture: string;
  timestamp: string;
}

interface MessageUsersProps {
  users: User[];
  onSelectUser: (user: User) => void;
}



export function MessageUsers({ users, onSelectUser }: MessageUsersProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    console.log("clicked");
    console.log(category);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    onSelectUser(user);
  };

  return (
    <div className="content">
      <h1 className="msgTitle">Messages</h1>

      <div className="msgCat">
        <h2
          className={`catAll ${selectedCategory === "All" ? "selected" : ""}`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </h2>
        <h2
          className={`catAll ${
            selectedCategory === "Buying" ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick("Buying")}
        >
          Buying
        </h2>
        <h2
          className={`catAll ${
            selectedCategory === "Selling" ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick("Selling")}
        >
          Selling
        </h2>
      
      </div>
      <div className="msgs">
        {users.map((user) => (
          <div
            className={`us1 ${
              selectedUser && selectedUser.id === user.id ? "selected" : ""
            }`}
            key={user.id}
            onClick={() => handleUserClick(user)}
          >
            <img className="us1pfp" src={user.profilePicture} alt={user.name} />
            <div className="text">
              <div className="name1">{user.name}</div>
              <div className="prev1">{user.preview}</div>
            </div>
            <div className="stamp1">{user.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
