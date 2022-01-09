import React from "react";

export const Menu = ({ Dat }) => {
  return (
    <div className="section-center">
      {Dat.map((val) => {
        const { id, title, desc, img, category, price } = val;
        return (
          <article className="menu-item" key={id}>
            <img className="photo" src={img} alt={title}></img>
            <div className="item-info">
                <header>
              <h4>{title}</h4>
              <h4 className="price"> {Math.floor(price)*10}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
