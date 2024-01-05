import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from '../components/signup'
import { SignIn } from '../components/signin'

function App() {
  return (
    <div>
      <Signup></Signup>
      <SignIn></SignIn>
    </div>
  )
}

export default App
