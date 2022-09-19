import React from 'react'
import Initiative from '../components/Initiative'
import { Learn } from '../components/learn&earn'
import { Navbar } from '../components/Navbar'
import About from './About'
import Expertise from './Expertise'
import Footer from './Footer'

import '../App.css';

export const Dashboard = () => {
  return ( 
    <>
    <Navbar/>
    <div className='backimg'>
        <div className='backimgLT'>
        <div className='backimgBB' >
          <br />
          <br />
        <h2 className='dreadnoughthd'>Dreadnought</h2> 
        <br />
        <h5 className='dreadnoughtpara' >School for Deep Tech founders</h5> 
        <br />
        <br />
        <br />
        </div>
        </div>
    </div>

   
                <div className='paradiv' >
                <p className='para'>
                We believe humanity's survival depends on us being a spacefaring civilisation and future deep tech founders will lead the way. <br /><br/>
                Get paid to learn the initial 2 months of founder journey that covers everything other than engineering. We trust your coding skills.
                </p>
                </div>
                <br />
                <br />
                  <Initiative/>
                  <br />
                  
          <About/>
          <br />
          <br />
          
          <Expertise/>
          <Learn/>
          <Footer/>
          
        



    </>
  )
}

