import React from 'react'
import { Social } from '../components/SocialInitiatives'
import "../App.css"
const Initiative = () => {
  return (
    <div style={{width:"100%",backgroundColor:"rgb(243 226 203 / 60%)"}}>
    <h1 className='socialheading ' > Social Initiative By</h1>

  <div class = "d-flex initflex" >
    {
      Social.map((con)=>{
        return(
          
          <div className='SIcard' style={{ marginTop:"4vh"}} key={con.id}>
          <img src={con.image} style={{width:"16rem", borderRadius:"20px"}} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text" style={{fontSize:"30px"}}>{con.title}</p>
          </div>
        </div>
        
        )
      })
    }
  </div>
  <br/>
    </div>
    
  )
}

export default Initiative
