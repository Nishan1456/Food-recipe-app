import React from 'react'
import CustomImage from './CustomImage'


const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <CustomImage imgSrc={recipe.image} pt={"65%"}/>
      <div className='recipe-card-info'>
        <img src={recipe.authorImg} alt="" className='author-img'/>
        <p className='recipe-title'>{recipe.title}</p>
        <p className='recipe-desc'>{recipe.description}</p>
        <a className='view-btn' href='#!'>VIEW RECIPE</a>
      </div>
    </div>
  )
}

export default RecipeCard
