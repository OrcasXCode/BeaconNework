import React from 'react'
import {Link, NavLink,useLocation} from 'react-router-dom'
import Logo from "/logo.svg"
import { useState } from 'react'
import "./Header.css";

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('jsonwebtoken');
  const closeMenu = () => setMenuOpen(false);
  const [active,setActive]=useState('home');
  const handleClick=(option)=>{
    setActive(option);
  }


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
          <NavLink to="/" onClick={()=>{closeMenu();handleClick('home')}} className={active === 'home' ? 'text-[#084c98]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"  onClick={()=>{closeMenu();handleClick('about')}} className={active === 'about' ? 'text-[#084c98]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>About</NavLink>
        </li>
        <li>
          <NavLink to="/products"  onClick={()=>{closeMenu();handleClick('products')}} className={active === 'products' ? 'text-[#084c98]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us"  onClick={()=>{closeMenu();handleClick('contact')}} className={active === 'contact' ? 'text-[#084c98]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Contact</NavLink>
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
        <NavLink to="/signin" onClick={()=>{closeMenu();handleClick('login')}} className={active === 'login' ? 'text-[#084c98]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup" onClick={()=>{closeMenu();handleClick('signup')}} className={active === 'signup' ? 'text-[#084c98]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Sign Up</NavLink>
      </li>
    </>
  )}
</ul>


    </nav>
  );
};
