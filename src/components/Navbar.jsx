import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    // return < Navigate replace to="/login" />
    navigate('/login')
    window.location.reload()
  }

  return (
    <div className="navbar bg-base-200 h-20">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">YONDAY Chat</a>
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
          <li onClick={(e) => handleLogout(e)}><a>Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar