import React from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
     {/* <h1>Whatsapp clone</h1> */}
     <Sidebar />
     <Chat />
     {/* chat */}
     {/* 23.11.30 */}
    </div>
  );
}

export default App;
