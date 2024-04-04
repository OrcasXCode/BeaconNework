import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from "/logo.svg"; 
import user from "/user.svg"
import "./Header.css";
import Cookies from 'js-cookie';
import { useAuth0 } from '@auth0/auth0-react';

export function Header() {
  const { user,loginWithRedirect,isAuthenticated,logout } = useAuth0();
  console.log("Current User",user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(''); 
  const location = useLocation();


  useEffect(() => {
    setActive(getActiveRoute(location.pathname));
  }, [location.pathname]);

  function getActiveRoute(pathname) {
    switch (pathname) {
      case '/':
        return 'home';
      case '/about':
        return 'about';
      case '/products':
        return 'products';
      case '/contact-us':
        return 'contact';
      case '/scoreboard':
        return 'scoreboard';
      case '/signin':
        return 'signin';
      case '/signup':
        return 'signup';
      default:
        return '';
    }
  }

  const closeMenu = () => setMenuOpen(false);

  const handleClick = (option) => {
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
      <ul className={`${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => { closeMenu(); handleClick('home') }} className={active === 'home' ? 'text-[#084c98]' : 'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => { closeMenu(); handleClick('about') }} className={active === 'about' ? 'text-[#084c98]' : 'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>About</NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => { closeMenu(); handleClick('products') }} className={active === 'products' ? 'text-[#084c98]' : 'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" onClick={() => { closeMenu(); handleClick('contact') }} className={active === 'contact' ? 'text-[#084c98]' : 'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Contact</NavLink>
        </li>
      </ul>
      <ul className={`${menuOpen ? "open" : ""}`}>
        {Cookies.get('token')!==undefined  ? (
          <div className='flex items-center justify-center'>
            <img src={user} className="h-10 object-cover" alt="Logo" />
            <p className='ml-3 text-gray-700 font-semibold'>Welcome !</p>
          </div>
        ) : (
          <>
            <li>
              
              {/* <NavLink to="/signin" onClick={() => { closeMenu(); handleClick('signup') }} className={active === 'signin' ? 'text-[#084c98]' : 'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Log In</NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/signup" onClick={() => { closeMenu(); handleClick('signup') }} className={active === 'signup' ? 'text-[#084c98]' : 'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Sign Up</NavLink>
               */}
               {isAuthenticated ? <button className='text-black' onClick={(e)=>logout()} >Logout</button> : <button className='text-black' onClick={(e) => loginWithRedirect()}>Log In</button>}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
