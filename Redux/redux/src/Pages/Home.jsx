import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Home = () => {

  const [formInput,setFormInput] = useState({
    name:"",
    age:"",
    email:"",
    contact:""
  })

  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input type="text" value={formInput.name} />
        <br />
        <label>Age</label>
        <br />
        <input type="number" value={formInput.age} />
        <br />
        <label>Email</label>
        <br />
        <input type="email" value={formInput.email} />
        <br />
        <label>Contact</label>
        <br />
        <input type="tel" value={formInput.contact} />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Home;
