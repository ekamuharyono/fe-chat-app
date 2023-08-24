import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from './Alert'

const Login = () => {
  const navigate = useNavigate()

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const [disableButton, setDisableButton] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    status: '',
    message: ''
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    setDisableButton(true)
    try {
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
        setDisableButton(false)
        setLoginInfo({
          status: 'success',
          message: "Login Success"
        })
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userName', response.data.username)
        setShowAlert(true)

        setTimeout(() => {
          navigate('/')
          setShowAlert(false)
          window.location.reload()
        }, 2000);
      }
    } catch (error) {
      setDisableButton(false)
      setLoginInfo({
        status: 'error',
        message: error.response.data.message
      })
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3000);
    }



    // if (response.status == '401') {
    //   console.log('login gagal')
    // }
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
              {disableButton ? (
                <div className='text-center'>
                  <span className="loading loading-ring loading-xs"></span>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-md"></span>
                  <span className="loading loading-ring loading-lg"></span>
                </div>
              ) : (
                <button type='submit' className="btn btn-primary">Login</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className={showAlert ? '' : 'hidden'}>
        {loginInfo.status == 'success' ? <Alert status={loginInfo.status} alertMessage={loginInfo.message} /> : <Alert status={loginInfo.status} alertMessage={loginInfo.message} />}
      </div>
    </div>
  )
}

export default Login