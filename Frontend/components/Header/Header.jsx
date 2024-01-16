import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../src/assets/faviconbn (1).png'

export function Header(props) {
  

  return (
    <>
      <header>
        <nav>
          <div style={{display:'flex',alignItems:'center'}}>
            <Link>
              <img src={Logo} style={{height:'50px'}}></img>
            </Link>
            <div style={{ display: 'flex', marginLeft: 'auto' }}>
              <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, marginLeft: 'auto' }}>
                <li style={{ margin: '0 10px' }}>
                  <NavLink>Home</NavLink>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <NavLink>About</NavLink>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <NavLink>Contact Us</NavLink>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <NavLink>Products</NavLink>
                </li>
              </ul>
            </div>
            <div style={{display:'flex',alignItems:'center',marginLeft:'auto'}}>
              <Link style={{ margin: '0 10px' }}>Log In</Link>
              <Link style={{ margin: '0 10px' }}>Sign Up</Link>
            </div>
           
          </div>
        </nav>
      </header>
    </>
  )
}
