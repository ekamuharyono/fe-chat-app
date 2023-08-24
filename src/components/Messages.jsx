import React, { useState, useEffect, useRef } from 'react'
import ChatStart from './ChatStart'
import ChatEnd from './ChatEnd'
import reactIcon from '../assets/react.svg'
import viteIcon from '/vite.svg'
import MessageInput from './MessageInput'
import axios from 'axios';

const Messages = ({ socket, targetUser, newMessage, onMessageReceived }) => {
  const messagesContainerRef = useRef();

  const [messages, setMessages] = useState([]);
  const currentUser = localStorage.getItem('userName')

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/chat/messages?user1=${currentUser}&user2=${targetUser}`)
        .then((response) => {
          setMessages(response.data)
        })
    } catch (error) {
      console.log(error)
    }

  }, [targetUser, setMessages]);

  useEffect(() => {
    if (newMessage) {
      setMessages((prevMessages) => [...prevMessages, newMessage])
    }
  }, [newMessage])

  useEffect(() => {
    // Auto scroll ke bawah setiap kali messages berubah
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // console.log(newMessage)

  return (
    <div className=''>
      <div ref={messagesContainerRef} className='px-3 overflow-y-scroll h-screen pt-24 pb-24'>
        {messages.map((message, key) => (
          message.sender !== localStorage.getItem('userName') ? (
            <ChatStart key={key} profilePicture={viteIcon} contentChat={message.text} timeChat={'12:14'} statusChat={'Seen'} isLastChat={false} />
          ) : (
            <ChatEnd key={key} profilePicture={viteIcon} contentChat={message.text} timeChat={'12:14'} statusChat={'Seen'} isLastChat={false} />
          )
        ))}
      </div>
      <div className='absolute bottom-0 right-0 left-0 w-full'>
        <MessageInput onMessageSent={onMessageReceived} targetUser={targetUser} socket={socket} />

      </div>
    </div>
  )
}

export default Messages