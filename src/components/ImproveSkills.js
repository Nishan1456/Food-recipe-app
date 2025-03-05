import React from 'react'
import food9 from "../images/Foods/food9.jpg"
const ImproveSkills = () => {
  return (
    <div className="section improve-skills">
   <div className="col img">
      <img src={food9} alt="Food" />   
      
    </div>
    <div className="col typography">
       <h1 className='title'>Improve Your Culinary Skills</h1>
       <button className='btn'>signup now</button>
    
   </div>
    
</div>
  )
}

export default ImproveSkills