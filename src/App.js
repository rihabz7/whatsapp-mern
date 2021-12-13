import React, { useEffect }from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    const pusher = new Pusher('fa8c9b02b6c71dad05d5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
     <div className="app__body">
      <Sidebar />
      <Chat />
     </div>

     
     {/* chat */}
     {/* 21.12.01 */}
    </div>
  );
}

export default App;
