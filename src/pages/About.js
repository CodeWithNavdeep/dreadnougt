import React from 'react'
import { dreadnoughtAbout } from '../components/SocialInitiatives'

const About = () => {
  return (
    <div style={{width:"100%"}}>
        <h1 className='abouthead'>About Dreadnought</h1>
        <br/>
        <p className='aboutpara'>
Our team is comprised of digitally-native entrepreneurs, futurists and operators with strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to launch Dreadnought to super charge the future by helping unlock the potential of future deep tech entrepreneurs.</p>

    <div className = "d-flex initflex" style={{ paddingLeft:"4vw", marginTop:"4vh"}} >
    {
      dreadnoughtAbout.map((content)=>{
        return(
          
          <div classNameName='Acard' key={content.id}>
          <img  src={content.image} classNameName="card-img-top Aimg" alt="..."/>
          <h2 className='pname'>{content.name}</h2>
          <div className="card-body" >
            <p className="card-text pdesc" style={{fontSize:"16px",width:"77%",textAlign:"center"}}>{content.desc}</p>
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

export default About
