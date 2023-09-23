import React, { useState } from 'react';
import './Login.css';
 import axios from "axios"
function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
   
  function handleSubmit(e) {
    e.preventDefault();

    
    
    
    axios.post('http://localhost:8080/login', {name, password})
    .then((result) => {
      console.log(result.data)
      setName("")
      setPassword("")
      
    })
  }


console.log(name)

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

   
    </div>
  );
}

export default Login;
