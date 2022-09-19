import React from 'react'
import { dreadnoughtExpertise } from '../components/SocialInitiatives'

const Expertise = () => {
  return (
    <div className='exphead'>
    <h1 className='exphead1' > Student Experiences</h1>

  <div className = "d-flex initflex" style={{paddingLeft:"11vw"}} >
    {
      dreadnoughtExpertise.map((item)=>{
        return(

            <div style={{ marginTop:"4vh"}} key={item.id}>
            <img  src={item.image} className="card-img-top Eimg" alt="..."/>
            <h2 className='sname' style={{ paddingLeft:"4vw"}}>{item.name}</h2>
            <div className="card-body" >
              <p className="card-text pdesc" style={{fontSize:"16px",width:"77%",textAlign:"center"}}>{item.desc}</p>
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

export default Expertise
