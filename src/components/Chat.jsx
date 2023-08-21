import React from 'react'
import reactIcon from '../assets/react.svg'

const Chat = ({ statusChat, contentChat, profilePicture, timeChat, chatForMe, isLastChat = true }) => {
  return (
    <div>
      <div className={`chat chat-${chatForMe ? 'start' : 'end'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={profilePicture} />
          </div>
        </div>
        <div className={`flex ${!chatForMe && 'flex-row-reverse'} items-center`}>
          <div className="chat-bubble">{contentChat}</div>
          <time className="text-xs opacity-50 mx-2">{timeChat}</time>
        </div>
        <div className={`chat-footer opacity-50 ${!isLastChat && 'hidden'}`}>
          {isLastChat ? statusChat : ''}
        </div>
      </div>
    </div>
  )
}

export default Chat