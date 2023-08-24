import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom'
import ChatApp from './components/ChatApp'
import Login from './components/Login'

function App() {
  // const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    token ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/login' element={isLoggedIn ? <Navigate to='/' /> : <Login />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/' element={isLoggedIn ? <ChatApp /> : <Navigate to='/login' />} />
      </Routes>
    </Router>
  )
}

export default App
