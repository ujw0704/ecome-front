import React from 'react'
import "./Header.css"
 import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='container'>
      <ul>
        <li>
            <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to ="/About">About</Link>
            </li>

            <li>
                <Link to ="/Product">Product</Link>
            </li>
            <li>
                <Link to ="/Cart">Cart</Link>
            </li>
         
      </ul>
    </div>
  )
}

export default Header
