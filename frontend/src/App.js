import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace the logo with emojis */}
        <div className="App-logo">
          🌿 Ivy Exchange 🌿
        </div>
        <div className="App-search">
          {/* Add a search bar */}
          <input
            type="text"
            placeholder="Search for products"
            className="App-search-input"
          />
          <button className="App-search-button">Search</button>
        </div>
        <div className="App-featured-item">
          🌟 Featured Item 🌟
        </div>
        <div className="App-featured-item-display">
          🧲  ❤️ 🎍
        </div>
        <p>
          Welcome to Ivy Exchange! 📌
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's do this :D
        </a>
      </header>
    </div>
  );
}

export default App;
