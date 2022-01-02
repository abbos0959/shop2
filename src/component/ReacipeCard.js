import React from "react";

export const ReacipeCard = ({ recipes }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipes;
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal}  className="card-image"/>
      <div className="card-body">
        <span className="category">{strCategory} </span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">
          Ingredient
        </a>
      </div>
    </div>
  );
};
