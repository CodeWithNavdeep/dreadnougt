import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element = {<Dashboard/>}/>  
    <Route exact path="/login" element = {<Login/>}/>  
    <Route exact path="/register" element = {<Register/>}/>  
    </Routes>
    </Router>
    
   
   </>
  );
}

export default App;
