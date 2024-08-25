import React from 'react'
import { Link } from 'react-router-dom' 

function Navbar() {
    const navStyle = {
        backgroundColor: '#333',
        padding: '1rem',
      };
    
      const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
      };
    
      const linkStyle = {
        color: 'white',
        textDecoration: 'none',
      };
    
  return (
    <nav style={navStyle}>
        <ul style={ulStyle}>
            <li>
                <Link to='Home' style={linkStyle}>Home</Link>
            </li>
            <li>
                <Link to='/About' style={linkStyle}>About</Link>
            </li>
            <li>
                <Link to='/Services' style={linkStyle}>Services</Link>
            </li>
            <li>
                <Link to='/Contact' style={linkStyle}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar