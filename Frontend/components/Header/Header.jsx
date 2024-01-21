import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../src/assets/faviconbn (1).png'

export function Header(props) {
  

  return (
    <>
      <header>
        <nav>
          <div style={{display:'flex',alignItems:'center' }}>
            <Link  to="/">
              <img src={Logo} style={{height:'70px'}}></img>
            </Link>
            <div style={{ display: 'flex', marginLeft: 'auto',justifyContent:'space-between', gap:'5px' }}>
              <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, marginLeft: 'auto' }}>
                <li style={{ margin: '0 10px' }}>
                  <NavLink to="/" style={{textDecoration: 'none'}}>Home</NavLink>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <NavLink to="/" style={{textDecoration: 'none'}}>About</NavLink>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <NavLink style={{textDecoration: 'none'}}>Contact Us</NavLink>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <NavLink style={{textDecoration: 'none'}}>Products</NavLink>
                </li>
              </ul>
            </div>
            <div style={{display:'flex',alignItems:'center',marginLeft:'auto'}}>
              <Link to='/signin' style={{ margin: '0 10px', textDecoration:'none' }}>Log In</Link>
              <Link to="/signup" style={{ margin: '0 10px', textDecoration:'none' }}>Sign Up</Link>
            </div>
           
          </div>
        </nav>
      </header>
    </>
  )
}
