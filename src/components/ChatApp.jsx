import { useState, useEffect } from 'react'
import axios from 'axios'
import socketIO from 'socket.io-client';
const socket = socketIO.connect(import.meta.env.VITE_API_BASE_URL);
import Navbar from './Navbar'
import Contact from './Contact'
import Messages from './Messages'

import reactIcon from '../assets/react.svg'
import viteIcon from '/vite.svg'
import MessageHeader from './MessageHeader'

const ChatApp = () => {
  const [targetUser, setTargetUser] = useState()
  const [newMessage, setNewMessage] = useState()

  const handleBackToHome = (data) => {
    setTargetUser('')
  }

  const handleMessageReceived = (data) => {
    setNewMessage(data);
  };

  useEffect(() => {
    socket.on(`messageTo${localStorage.getItem('userName')}`, (data) => {
      setNewMessage(data)
    });
  }, [newMessage])

  return (
    <div className="text-white max-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6">
        <div id="left" className={`col-span-2 md:border-r border-slate-500 border-opacity-25 md:block ${!targetUser ? '' : 'hidden'}`}>
          <nav className=''>
            <Navbar />
          </nav>
          <div id="contacts" className=''>
            <div className='px-2'>
              <div onClick={(e) => setTargetUser('yonoo')} >
                <Contact avatar={viteIcon} name={'Eka Muharyono'} info={'halo apa kabar'} />
              </div>
              <div onClick={(e) => setTargetUser('daya')}>
                <Contact avatar={reactIcon} name={'Kharomatul Hidayah'} info={'kabar baik'} />
              </div>
              <div onClick={(e) => setTargetUser('npc')} >
                <Contact avatar={viteIcon} name={'User NPC'} info={'halo apa kabar'} />
              </div>
            </div>
          </div>
        </div>
        <div id="right" className={`md:col-span-4 md:block relative ${targetUser ? '' : 'hidden'}`}>
          {targetUser ? (
            <div>
              <nav>
                <MessageHeader backToHome={handleBackToHome} profilePicture={viteIcon} contactName={targetUser} />
              </nav>
              <div id="messages">
                <Messages onMessageReceived={handleMessageReceived} newMessage={newMessage} socket={socket} targetUser={targetUser} />
              </div>
            </div>
          ) : (
            <h1>pilih siapa yg mau anda chat</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatApp


// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const ChatApp = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const socket = io('http://localhost:3000'); // Sesuaikan dengan URL server Socket.IO

//   useEffect(() => {
//     // Mendengarkan pesan yang diterima dari server
//     socket.on('receive_message', (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       const newMessage = {
//         content: message,
//         sender: 'userA', // Ganti dengan pengirim yang sesuai
//         receiver: 'userB', // Ganti dengan penerima yang sesuai
//       };
//       socket.emit('send_message', newMessage);
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <strong>{msg.sender}: </strong> {msg.content}
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Kirim Pesan</button>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
