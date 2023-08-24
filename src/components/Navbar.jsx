import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [searchMode, setSearchMode] = useState(false)

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    // return < Navigate replace to="/login" />
    navigate('/login')
    window.location.reload()
  }

  const handleClickSearch = () => {
    setSearchMode(!searchMode)
  }

  return (
    <div className='navbar bg-base-200 h-20'>
      {searchMode ? (
        <form className="">
          <div className="flex items-center">
            <span onClick={handleClickSearch} className='mx-2 cursor-pointer'>
              <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill='white' d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12H20V10H10.83l4.58-4.59z" />
              </svg>
            </span>
            <input type="text" autoFocus placeholder="Search..." className="w-full px-2 bg-transparent outline-none active:outline-none" />
          </div>
        </form>
      ) : (

        <div className="navbar bg-base-200 h-20">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">YONDAY Chat</a>
          </div>
          <div>
            <div onClick={handleClickSearch}>
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
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
        </div>
      )}
    </div>
  )
}

export default Navbar