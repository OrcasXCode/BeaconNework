import React from 'react'
import {Link, NavLink,useLocation} from 'react-router-dom'
import Logo from "/logo.svg"
import { useState } from 'react'
import "./Header.css";

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('jsonwebtoken');
  const closeMenu = () => setMenuOpen(false);


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
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" onClick={closeMenu}>Contact</NavLink>
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
        <NavLink to="/signin" onClick={closeMenu}>Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup" onClick={closeMenu}>Sign Up</NavLink>
      </li>
    </>
  )}
</ul>


    </nav>
  );
};
