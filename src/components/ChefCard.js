import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const ChefCard = ({chef}) => {
  return (
    <div className='chef-card'>
     <img src={chef.img} alt='chef'/>
     <div className='chef-card-info'>
        <h3 className='chef-card-name'>{chef.name}</h3>
        <p className='chef-recipe-count'>Recipies: <b>{chef.count}</b></p>
        <p className='chef-card-cuisine'>Cuisine: <b>{chef.cuisine}</b></p>
        <p className='chef-icons'><FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faInstagram}/></p>
        

     </div>
    </div>
  )
}
