import React from 'react'
import Chat from './Chat'

import reactIcon from '../assets/react.svg'
import viteIcon from '/vite.svg'
import MessageInput from './MessageInput'

const Messages = ({ socket, messages }) => {
  return (
    <div className=''>
      <div className='px-3 overflow-y-scroll h-screen pt-24 pb-24'>
        {messages.map((message, key) => (
          <Chat key={key} chatForMe={message.from !== localStorage.getItem('userName')} profilePicture={viteIcon} contentChat={message.text} timeChat={'12:14'} statusChat={'Seen'} isLastChat={true} />
        ))}
      </div>
      <div className='absolute bottom-0 right-0 left-0 w-full'>
        <MessageInput socket={socket} />
      </div>
    </div>
  )
}

export default Messages