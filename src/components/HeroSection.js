import React from 'react'
import CustomImage from './CustomImage'
import food1 from "../images/Foods/food.jpg"
import food2 from "../images/Foods/food10.jpg"
import food3 from "../images/Foods/food2.jpg"
import food4 from "../images/Foods/food3.jpg"
import food5 from "../images/Foods/food4.jpg"
import food6 from "../images/Foods/food5.jpg"
import food7 from "../images/Foods/food6.jpg"
import food8 from "../images/Foods/food9.jpg"
import food9 from "../images/Foods/food8.jpg"

const HeroSection = () => {
  const image=[
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9
    ]
   
  return (
    <div className="section hero">
        <div className="col typography">
           <h1 className='title'>What Are We About</h1>
           <p className='info'>FoodMania is a place where you can please your soul and tummy with delicious food recepies of all cuisine. Our services is absolutely free. So start exploring now.</p>
           <button className='btn'>explore now</button>
        
       </div>
        <div className="col gallery">
          {
            image.map((src,index)=>
            (
              
              <CustomImage key={index} pt={"85%"} imgSrc={src}/>

            ))
          }
           
        </div>
    </div>
  )
}

export default HeroSection