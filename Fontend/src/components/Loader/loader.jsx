import React from 'react'
import { SpinnerInfinity } from 'spinners-react'
// import './Loader.css'
function Loader() {
  return (
    <div>
       style = {{
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
        height:"50vh"
    }}
      <SpinnerInfinity 
      size={50} 
      thickness={100} 
      speed={100} 
      color="#36ad47" 
      secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
  )
}

export default Loader