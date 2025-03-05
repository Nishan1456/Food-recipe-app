import React from 'react'
import { ChefCard } from './ChefCard'
import chef1 from "../images/Chefs/chef1.jpeg";
import chef2 from "../images/Chefs/chef2.jpeg";
import chef3 from "../images/Chefs/chef3.jpg";
import chef4 from "../images/Chefs/chef4.jpeg";
import chef5 from "../images/Chefs/chef5.jpeg";
import chef6 from "../images/Chefs/chef6.jpeg";

const ChefSection = () => {
    const chefs=[
        {
            name:"Binod Shrestha",
            img:chef1,
            count:"10",
            cuisine:"Mexican"
        },
        {
            name:"Kamal Ghale",
            img:chef5,
            count:"13",
            cuisine:"Japanese"
        },
        {
            name:"Anmol Rai",
            img:chef3,
            count:"05",
            cuisine:"Korean"
        },
        {
            name:"Rajiv Mandal",
            img:chef4,
            count:"22",
            cuisine:"Indian"
        },
        {
            name:"Prabha Shrestha",
            img:chef2,
            count:"18",
            cuisine:"Italian"
        },
        {
            name:"Sumitra Deva",
            img:chef6,
            count:"02",
            cuisine:"Thai"
        },
    ]
  return (
    <div className='section chefs'>
      <h1 className='title'>Our Top Chefs</h1>
      <div className='top-chef-container'>
        {
            chefs.map((chef)=>(
                <ChefCard key={chef.name} chef={chef}/>

            ))
        }
  
      </div>
    </div>
  )
}

export default ChefSection
