// eslint-disable-next-line no-unused-vars
import React from 'react'
import Back from './Back'
import LoginForm from './LoginForm'
import Footer from '../footer'

const Login = () => {
  return (
    <div>
      <Back  title='Login'/>
      <LoginForm/>
      <Footer/>
    </div>
  )
}

export default Login
