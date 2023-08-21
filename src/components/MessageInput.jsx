import React, { useState } from 'react'

const MessageInput = ({ socket }) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        from: localStorage.getItem('userName'),
        to: localStorage.getItem('userName') == 'yonoo' ? 'daya' : 'yonoo',
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };

  return (
    <form onSubmit={e => handleSendMessage(e)} className='flex items-center justify-between p-3 border-y border-opacity-25 border-slate-500 border-r bg-base-100'>
      <div className='w-full basis-11/12'>
        <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder={message || 'Type here'} value={message} className="input input-bordered input-info-content px-6 rounded-full w-full mr-3 outline-none text-white" />
      </div>
      <div className='transform rotate-90 btn rounded-full w-14 h-14 border shadow-lg mr-3'>
        <button type='submit' className='drop-shadow-xl'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
            className="inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default MessageInput