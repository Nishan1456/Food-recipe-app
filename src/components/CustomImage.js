import React from 'react'

const CustomImage = ({imgSrc,pt}) => {
  return (
    <div className="custom-image" style={{paddingTop:pt}}>
        <img src={imgSrc} alt="food images" />

    </div>
  )
}

export default CustomImage