import React from 'react'
import "./Header.css"
 import { Link } from 'react-router-dom'
 import { useContext } from 'react'
 import { cont } from '../App'
function Header() {

  const {cart, setCart} = useContext(cont)

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
                <Link to ="/Cart">Cart{cart.length }</Link>
            </li>
          
         
      </ul>
    </div>
  )
}

export default Header
