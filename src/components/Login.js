import React, { useState } from 'react';
import './Login.css';
import axios from "axios"
import { Link, withRouter } from 'react-router-dom';

function Login({ history }) {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:8080/login', { username, password })
      .then((result) => {
        console.log(result.data)
        if (result.data.sucess) {
          console.log('Login successful');
         
        } else {
          console.error("Error in login");

        }



        // setName("")
        // setPassword("")

      })
  }


  // console.log(name)

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>


      <div>
        <div>
          <p>Don't have an account?</p>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;


