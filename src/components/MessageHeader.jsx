import React from 'react'
import avatar from '/vite.svg'

const MessageHeader = ({ profilePicture, contactName }) => {
  return (
    <div className="navbar bg-base-200 h-20 px-3 absolute z-50">
      <div id="avatar" className="col-span-1">
        <div className="avatar flex items-center">
          <div className="w-10 rounded-full ring">
            <img src={profilePicture} />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{contactName}</a>
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