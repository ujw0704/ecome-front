import React, { useState } from 'react';
import axios from "axios"
function Registration() {
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);


   

    axios.post('http://localhost:8080/register', formData)
    .then((result) => {
      console.log(result.data);
    })
    .catch((error) => {
      console.error("AxiosError:", error);
    });
  
  }



  return (
    <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
