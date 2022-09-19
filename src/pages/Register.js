
import React, { useState } from "react";


import "../styles/Loginpage.css";

import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar";
import Footer from "./Footer";
import { Button } from "../components/Button";
export const Register = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = ()=>{
    const {email, password} = user
    if(email && password){
      
      axios.post("http://localhost:8080/register", user)
      .then(res=>
        {
        alert(res.data.message)
        navigate("/main")
      }
      )
    }
    else{
      alert("invalid input")
      navigate("/register")
    }
  }

  return (
    <>
    <Navbar/>
    <div className="login flex align-center justify-center">
        <div className="loginFormContainer flex align-center justify-center">
          <p className="">Welcome</p>
          <p className="">Sign Up</p>
          <form className="loginForm flex align-center justify-center">
            <div className="formGroup flex justify-center">
              <label htmlFor="staticEmail" className="flex align-center justify-center">Email</label>
              <input required
                type="email"
                className=""
                id="staticEmail"
                placeholder="email@example.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup flex justify-center">
              <label htmlFor="inputPassword" className="flex align-center justify-center">Password</label>
              <input required
                type="password"
                className=""
                id="inputPassword"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="entrypage_btnContainer flex align-center justify-center">
              <Button type="button" txt="Submit" callme={register} width = "17vw" height= "4vh" borderRadius = "10px" title = "Submit" />
              <p className="uppercase center-text flex align-center" style={{paddingLeft:"7.5vw"}}>OR</p>
              <Button type="button" txt="Register" callme={() => navigate("/login")} width = "17vw" height= "4vh" borderRadius = "10px" title = "Login" />
            </div>        
          </form>
        </div>
    </div>
    <Footer/>
    </>
  );
};

