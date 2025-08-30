import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import {Home}  from '../components/Home/Home.jsx'
import { ContactUs } from '../components/ContactUs.jsx/ContactUs.jsx'
import { About } from '../components/About.jsx/About.jsx'
import { Products } from '../components/Products/Products.jsx'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index.js'
import { configureStore } from '@reduxjs/toolkit'
import { TermsAndConditions } from '../pages/TermsAndConditions.jsx'
import { PrivacyPolicy } from '../pages/PrivacyPolicy.jsx'


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
        path:"products",
        element:<Products></Products>
      },
      {
        path:'terms-and-conditions',
        element:<TermsAndConditions></TermsAndConditions>
      },
      {
        path:'privacy-policy',
        element:<PrivacyPolicy></PrivacyPolicy>
      }
    ]
  }

])


const store = configureStore({
  reducer:rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
 