import React from 'react'
import avatar from '/vite.svg'

const MessageHeader = ({ profilePicture, contactName, backToHome }) => {
  const handleBackToHome = () => {
    backToHome(true)
  }

  return (
    <div className="navbar bg-base-200 h-20 absolute z-50 md:px-3">
      <div onClick={handleBackToHome} id="avatar" className="col-span-1 btn px-1 pr-3 h-14 rounded-full">
        <div className='mr-1 md:hidden'>
          <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill='white' d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12H20V10H10.83l4.58-4.59z" />
          </svg>
        </div>
        <div className="avatar flex items-center">
          <div className="w-10 rounded-full ring">
            <img src={profilePicture} />
          </div>
        </div>
      </div>
      <div className="flex-1 cursor-pointer">
        <a className="normal-case mx-2 font-semibold text-xl">{contactName}</a>
      </div>
      <div className="dropdown dropdown-end">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <circle cx="12" cy="6" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        </button>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MessageHeader