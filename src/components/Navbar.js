import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import rocket from '../images/rocket.png'
export const Navbar = () => {
  let navigate = useNavigate();
 const enterLogin = ()=>{
  navigate("/login")
 }
 const enterSignup = ()=>{
  navigate("/register")
 }
  return (
    <nav className="navbar navstyle " >
    <div className="container-fluid d-flex">
      <a className="navbar-brand d-flex " href="/" style={{marginLeft:"2vw"}} >
         <h2 style={{marginRight:"1vw", color:"#fdf5f5"}}>Dreadnought</h2>
        <img src={rocket} alt="dreadnought logo"  className="d-inline-block align-text-top roboimg"/> 
      </a>
      <div className='d-flex btn_grp' style={{marginRight:"3vw"}}>
      <Button classes = "login_btn" callme = {enterLogin} title = "Login"/>&nbsp;&nbsp;
      <Button classes = "signup_btn" callme = {enterSignup}  title = "Sign Up"/>
      </div>
     
    </div>
  </nav>
  )
}


