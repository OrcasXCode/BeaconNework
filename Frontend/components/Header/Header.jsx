import React from 'react'
import {Link, NavLink,useLocation} from 'react-router-dom'
import Logo from "../../src/assets/logo.png"
import user from "../../src/assets/user.png"
import { useState } from 'react'
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../../data/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";



export  function Header() {
    const token = localStorage.getItem('jsonwebtoken');
    const googletoken=localStorage.getItem('googletoken');

    const [isOpen, setIsOpen] = useState(false);
      const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

 
   return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 bg-opacity-100 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-3 h-10"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {googletoken==null && token == null && (<Link
                            to="/signin"
                            className=" text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>)
                        }
                        {googletoken==null && token == null && <Link to="/signup">
                            <button
                                className="overflow-hidden w-25 p-4 h-10 bg-gray-800 flex text-center items-center justify-center text-white border-none rounded-full text-[15px] cursor-pointer relative z-10 group"
                                >
                                Get Started
                                <span
                                    className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                                ></span>
                                <span
                                    className="absolute  text-center flex items-center justify-center  w-36 h-32 -top-8 -left-2 bg-[#084c98]  rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                                ></span>
                                <span
                                    className="absolute w-36 h-32 -top-8 -left-2 bg-[#084c98] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                                ></span>
                                <span
                                    className="group-hover:opacity-100 text-center  flex items-center justify-center group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                    >SignUp</span>
                                </button>
                            </Link>}
                        {/* beaconnetwork login user */}
                       {token !== null && (<div className='flex  items-center'>
                        <img
                            src={user}
                            className="h-10 object-cover"
                            alt="Logo"
                        /> 
                        <p className='ml-3 text-gray-700 font-semibold'>Welcome !</p> </div>) }
                        {/* google login user */}
                       {googletoken !== null && (<div className='flex items-center'>
                        <img
                            src={user}
                            className="h-10 object-cover rounded-full"
                            alt="Logo"
                        /> 
                        <p className='ml-3 text-gray-700 font-semibold'>Welcome !</p> </div>) }
                    </div>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact-us"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-400" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="flex w-[75px] justify-end md:hidden">
                       <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
                    </div>

                     <AnimatePresence mode="wait">
                        {isOpen && (
                        <motion.div
                            layout="position"
                            key="nav-links"
                            variants={mobileNavContainerVariant}
                            initial="hidden"
                            animate="show"
                            className="mt-4 text-[17px] basis-full md:hidden text-gray-700 font-semibold flex flex-col items-end border-t border-b-black"
                        >
                            <motion.div style={{borderBottom:'1px solid black'}} variants={mobileNavListVariant} {...mobileNavExitProps}>
                                <NavLink to="/"  className={activeStyleCallback }>
                                    Home
                                </NavLink>
                            </motion.div>
                            <motion.div style={{borderBottom:'1px solid black'}} variants={mobileNavListVariant} {...mobileNavExitProps}>
                                <NavLink to="/about" className={activeStyleCallback}>
                                    About
                                </NavLink>
                            </motion.div>
                            <motion.div style={{borderBottom:'1px solid black'}} variants={mobileNavListVariant} {...mobileNavExitProps}>
                                <NavLink to="/contact-us" className={activeStyleCallback}>
                                    Contact Us
                                </NavLink>
                            </motion.div>
                            <motion.div style={{borderBottom:'1px solid black'}} variants={mobileNavListVariant} {...mobileNavExitProps}>
                                <NavLink to="/products" className={activeStyleCallback}>
                                    Products
                                </NavLink>
                            </motion.div>
                        </motion.div>
                        )}
                        </AnimatePresence>
                </div>
            </nav>
        </header>
    );
}
                




