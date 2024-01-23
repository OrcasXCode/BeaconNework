import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import {Home}  from '../components/Home/Home.jsx'
import { SignIn } from '../pages/signin.jsx'
import { Signup } from '../pages/signup.jsx'
import { VerifyEmail } from '../pages/verifyEmail.jsx'
import { ForgotPassword } from '../pages/forgot-password.jsx'
import { ContactUs } from '../components/ContactUs.jsx/ContactUs.jsx'
import { About } from '../components/About.jsx/About.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"contact-us",
        element:<ContactUs></ContactUs>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:'signin',
        element:<SignIn></SignIn>
      },
      {
        path:'signup',
        element:<Signup></Signup>
      },
      {
        path:'verify-email',
        element:<VerifyEmail></VerifyEmail>
      },
      {
        path:'forgot-password',
        element:<ForgotPassword></ForgotPassword>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
 