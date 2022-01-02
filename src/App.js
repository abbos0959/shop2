import React, { useState, UseEffect, useEffect } from "react";
import "./App.css";
import { ReacipeCard } from "./component/ReacipeCard";
import { Searchbar } from "./component/Searchbar";

const ApiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const App = () => {
  const [loading, Setloading] = useState(false);
  const [query, Setquery] = useState("");
  const [recipe, setrecipe] = useState([]);

  const Searchrecipe = async () => {
    Setloading(true);
    const url = ApiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setrecipe(data.meals);
    Setloading(false);
    console.log(data);
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    Searchrecipe();
    Setquery("")
  };
  useEffect(() => {
    Setloading(true);
    // Searchrecipe();
    fetch(ApiUrl + query)
      .then((response) => response.json())
      .then((data) => setrecipe(data.meals));
    Setloading(false);
  }, []);
  return (
    <div className="container">
      <h1>Mazzali ovqatlar</h1>
      <Searchbar
        Handlesubmit={Handlesubmit}
        value={query}
        onChange={(e)=>Setquery(e.target.value)}
      />
      <div className="recipe">
        {recipe
          ? recipe.map((value) => (
              <ReacipeCard key={value.idMeal} recipes={value} />
            ))
          : "bunday taom mavjud emas"}
      </div>
    </div>
  );
};
