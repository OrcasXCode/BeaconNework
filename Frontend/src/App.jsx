import { useState } from 'react'
import './App.css'
import { Signup } from '../pages/signup'
import { SignIn } from '../pages/signin'
import { Home } from '../components/home'
import {Route,Routes,useNavigate} from "react-router-dom"
import { ForgotPassword } from '../pages/forgot-password'
import { RegisterEmail } from '../pages/registerEmail'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/register-email' element={<RegisterEmail></RegisterEmail>}></Route>
      </Routes>
    </div>
  )
}

export default App
