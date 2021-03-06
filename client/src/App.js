import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <header className="app__body">
        <Sidebar />
        <Chat />
      </header>
    </div>
  );
}

export default App;
