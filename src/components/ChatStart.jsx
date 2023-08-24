import React from 'react'
import reactIcon from '../assets/react.svg'

const ChatStart = ({ statusChat, contentChat, profilePicture, timeChat, isLastChat = true }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicture} />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{timeChat}</time>
      </div>
      <div className="chat-bubble">{contentChat}</div>
      <div className={`chat-footer opacity-50 ${!isLastChat && 'hidden'}`}>
        {isLastChat ? statusChat : ''}
      </div>
    </div>
  )
}

export default ChatStart