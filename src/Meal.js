import React from 'react'
import "./index.css"

export const Meal = ({value}) => {
    return (
        <div className="recipeTile">
            <img src={value.recipe.image} className='recipeTile__image'
            onClick={()=>window.open(value.recipe.url)}
            ></img>
            <p className='recipeTile__name'> {value.recipe.label}</p>
             
        </div>
    )
}
