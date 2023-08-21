import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Messages from './Messages'

import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3000');

import reactIcon from '../assets/react.svg'
import viteIcon from '/vite.svg'
import MessageHeader from './MessageHeader'

const ChatApp = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="text-white max-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6">
        <div id="left" className='col-span-2 md:border-r border-slate-500 border-opacity-25'>
          <nav className='hidden md:block'>
            <Navbar />
          </nav>
          <div id="contacts" className='hidden md:block'>
            <div className='px-2'>
              <Contact avatar={viteIcon} name={'Eka Muharyono'} info={'halo apa kabar'} />
              <Contact avatar={reactIcon} name={'Kharomatul Hidayah'} info={'kabar baik'} />
            </div>
          </div>
        </div>
        <div id="right" className='md:col-span-4 md:block relative'>
          <nav>
            <MessageHeader profilePicture={viteIcon} contactName={'Eka Muharyono'} />
          </nav>
          <div id="messages">
            <Messages messages={messages} socket={socket} />
          </div>
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
