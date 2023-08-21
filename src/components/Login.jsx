import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await axios({
      url: `${API_BASE_URL}/auth/login`,
      method: 'POST',
      data: {
        username,
        password
      },
      responseType: 'json'
    })

    if (response.status == '200') {
      // console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userName', response.data.username)
      console.log('login berhasil')
      navigate('/')
      window.location.reload()
      // return <Navigate replace to={'/'} />
      // setTimeout(() => {
      //   <Navigate to={'/'} />
      // }, 1);
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={e => handleLogin(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login