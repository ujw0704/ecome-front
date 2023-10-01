import React, { useState } from 'react';
import axios from "axios"
import md5 from "md5"
import { useNavigate } from 'react-router-dom';
import "./reistertion.css"

function Registration() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    number: "",
    username: "",
    email: "",
  });

 
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // function handleChange(event) {
  //   event.preventDefault();
  //   console.log(formData);

  // }
    function handleSubmit(event) {
      event.preventDefault();
      console.log(formData);
  
       
      const hashedPassword = md5(formData.password);


      const formDataWithHashedPassword = {
        ...formData,
        password: hashedPassword,
      };
    axios.post('http://localhost:8080/register',formDataWithHashedPassword )
    .then((result) => {
      console.log(result.data);
      if(result.status === 200 && result.statusText === "OK") navigate("/login")
    })
    .catch((error) => {
      console.error("AxiosError:", error);
    });
  
    }



  return (
    <div  className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstname"
          id="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          name="number"
          id="number"
          value={formData.number}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
