import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from "/logo.svg"; 
import name from "/name.svg";

// Optimized image component
const OptimizedImage = ({ src, alt, className, loading = "eager", ...props }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={loading}
    decoding="async"
    {...props}
  />
);

export function Header() {
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
      default:
        return '';
    }
  }

  const closeMenu = () => setMenuOpen(false);

  const handleClick = (option) => {
    setActive(option);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <OptimizedImage src={Logo} className="h-8 md:h-10 w-auto" alt="Beacon Network Logo" />
            <OptimizedImage src={name} className="h-8 md:h-10 w-auto" alt="Beacon Network" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              onClick={() => handleClick('home')} 
              className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                active === 'home' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
              {active === 'home' && (
                <span className="absolute bottom-0 font-semibold left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </NavLink>
            
            <NavLink 
              to="/about" 
              onClick={() => handleClick('about')} 
              className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                active === 'about' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
              {active === 'about' && (
                <span className="absolute bottom-0 font-semibold left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </NavLink>
            
            <NavLink 
              to="/products" 
              onClick={() => handleClick('products')} 
              className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                active === 'products' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Products
              {active === 'products' && (
                <span className="absolute bottom-0 left-0 font-semibold w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </NavLink>
            
            <NavLink 
              to="/contact-us" 
              onClick={() => handleClick('contact')} 
              className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                active === 'contact' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
              {active === 'contact' && (
                <span className="absolute bottom-0 left-0 font-semibold w-full h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </NavLink>

            {/* CTA Button */}
            {/* <Link 
              to="/contact-us" 
              className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center font-semibold justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 top-2.5' : 'top-1'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'top-2.5'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            <NavLink 
              to="/" 
              onClick={() => { closeMenu(); handleClick('home'); }} 
              className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                active === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/about" 
              onClick={() => { closeMenu(); handleClick('about'); }} 
              className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                active === 'about' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              About
            </NavLink>
            
            <NavLink 
              to="/products" 
              onClick={() => { closeMenu(); handleClick('products'); }} 
              className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                active === 'products' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Products
            </NavLink>
            
            <NavLink 
              to="/contact-us" 
              onClick={() => { closeMenu(); handleClick('contact'); }} 
              className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                active === 'contact' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </NavLink>

            {/* Mobile CTA Button */}
            {/* <div className="pt-2">
              <Link 
                to="/contact-us" 
                onClick={closeMenu}
                className="block w-full px-4 py-3 text-center bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
