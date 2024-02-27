import React from 'react'
import {Link, NavLink,useLocation} from 'react-router-dom'
import Logo from "/logo.svg"
// import user from "../../src/assets/user.png"
import { useState } from 'react'
import "./Header.css";

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('jsonwebtoken');


  return (
     <nav className='flex font-bold w-full justify-between '>
      <Link to="/" className="flex items-center">
       <img src={Logo} className="mr-3 h-12" alt="Logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul  className={`${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>
    <ul className={`${menuOpen ? "open" : ""}`}>
  {token !== null ? (
    <div className='flex items-center justify-center'>
      <img src={"../../src/assets/user.png"} className="h-10 object-cover" alt="Logo"/> 
      <p className='ml-3 text-gray-700 font-semibold'>Welcome !</p>
    </div>
  ) : (
    <>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  )}
</ul>


    </nav>
  );
};
