import React from 'react'



const Footer = () => {
  return (
<nav className="navbar " style={{ position:"sticky", backgroundColor:"rgb(33, 42, 63)"}}>
    <div >
    <div>
    <h2 style={{marginLeft:"10vw", color:"#fdf5f5", textAlign:"center", marginTop:"2vh"}}>Copyright&copy; Dreadnought </h2> 
    </div>
      <div className='d-flex' style={{marginTop:"2vh",color:"whitesmoke", marginLeft:"2vw", justifyContent:"space-between"}}>
      <div className='' style={{marginTop:"1vh",color:"whitesmoke", width:"55vw"}}>
    <h3 style={{color:"whitesmoke", marginLeft:"1vw"}}>Contact US:</h3>
    <p style={{fontSize:"22px",marginLeft:"1vw"}}>FAX :XXXXXXXXXXXX </p>
    <p style={{fontSize:"22px",marginLeft:"1vw"}}>Mobile :XXXXXXXXXXXX </p>
    <p style={{fontSize:"22px",marginLeft:"1vw"}}>Feedback Email :--------------------- </p>
    <p style={{fontSize:"22px",marginLeft:"1vw"}}>address :------------------------------------------------------------------------------------------------------------------------------------------------------------ </p>
    </div>
    <div style={{alignSelf:"baseline"}}>
      <h3 style={{marginLeft:"15vw"}}>Use Of Services:</h3>
      <div style={{width:"20vw", marginLeft:"15vw"}} >
        <p style={{}}>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </div>
    </div>
    
    </div>
     
    </div>
  </nav>
  )
}

export default Footer
