import React, { useState, useEffect } from "react";
import "./App.css";
import { Categoryies } from "./Categoryies";
import Data from "./Data";
import { Menu } from "./Menu";
const AllCategory = ["all", ...new Set(Data.map((item) => item.category))];

export const App = () => {
  const [cat, setcat] = useState(AllCategory);
  const [Dat,setDat]=useState(Data)

  const FilterCategory=(cat)=>{
    if("all"==cat){
      setDat(Data)
      return;

    }
    const NewCat=Data.filter((item)=>item.category==cat)
    setDat(NewCat)
  }
  return (
    <div>
      <section className="menu-section">
        <div className="title">
          <h2>Our Project</h2>
        </div>
        <div className="underline"></div>

        <Categoryies FilterCategory={FilterCategory} cat={cat} />
        <Menu  Dat={Dat}/>
      </section>
    </div>
  );
};
