import React from "react";

export const Categoryies = ({ cat ,FilterCategory}) => {
  return (
    <div className="btn-container">
      {cat.map((categ,index) => (
        <button
        type="button"
        className="filter-btn"
        key={index}
        onClick={()=>FilterCategory(categ)}
        >{categ}</button>
      ))}
    </div>
  );
};
