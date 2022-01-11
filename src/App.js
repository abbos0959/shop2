import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Meal } from "./Meal";

export const App = () => {
  const [query, setquery] = useState("meal");
  const [meal, setmeal] = useState([]);
  const [lab, setlab] = useState("vegetarian");
  const [sel,setsel]=useState("vegan")
  const YOUR_APP_ID = "2f0526a8";
  const YOUR_APP_KEY = "b48a306504afaadeec129bbd75658657";

  const Url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${sel}`;

  const Search = async (e) => {
    // e.preventDefault();
    const Sear = await axios.get(Url);
    setmeal(Sear.data.hits);
    console.log(Sear.data.hits);
    setquery("");
  };

  useEffect(() => {
    Search();
    console.log("meal", meal);
    // console.log(meal.recipe.healthLabels);
  }, []);
  const SelecTitle = (e) => {
    setsel(e.target.value)
    console.log(sel);

    // console.log(lab);
  };
  const ap = [
    {
      value: "vegetarian",name:"vegetarian"
    },
    {
      value: "vegan",name:"vegan"
    },
    {
      value: "low-sugar",name:"low-sugar"
    },
  ];

  return (
    <div className="app">
      <h1>
        <u>Food Recipe</u>
      </h1>

      <div className="app__searchForm">
        <input
          type="text"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          placeholder="Type the Ingredient"
          className="app__input"
        ></input>

        <select onChange={SelecTitle}  value={sel} className="app__healthLabels ">
          {ap.map((val)=>(
            <option value={val.value}> {val.name}</option>
          ))}
        </select>
        <button onClick={Search} className="app__submit">
          Search
        </button>
      </div>
      <h1> Fod Recipe</h1>
      <div className="app__recipes">
        {meal.map((value) => (
          <Meal value={value} />
        ))}
      </div>
    </div>
  );
};
