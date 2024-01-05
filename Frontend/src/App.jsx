import { useState } from 'react'
import './App.css'
import { Signup } from '../components/signup'
import { SignIn } from '../components/signin'
import { Home } from '../components/home'
import {Route,Routes,useNavigate} from "react-router-dom"



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  )
}

export default App
