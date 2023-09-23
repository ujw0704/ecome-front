import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='homepage'>
      <img src='https://i.pinimg.com/600x315/c2/50/00/c250000424566b562622a5bf30a94563.jpg' alt='/'/>
      <h1 className="text-center">Welcome to the Ecomarace website</h1>
      <p className="lead text-center">We have a variety of cloathing and brand available for you.</p><br/>
    
      <button><Link to="/Product">PRODUCT</Link></button>
      
      <p><button><Link to="/">cart</Link></button></p>
      
        
      
    
    </div>
  )
}

export default Home
