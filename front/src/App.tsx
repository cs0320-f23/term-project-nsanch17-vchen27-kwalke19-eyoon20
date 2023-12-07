import React, { useEffect, useState } from "react";
import Home from "./pages/Home.tsx";
import "./style/App.css";
import Profile from "./pages/Profile.tsx";

// REMEMBER TO PUT YOUR API KEY IN A FOLDER THAT IS GITIGNORED!!
// (for instance, /src/private/api_key.tsx)
// import {API_KEY} from "./private/api_key"

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
