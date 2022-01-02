import React from "react";

export const Searchbar = ({ Handlesubmit, value, onChange }) => {
  return (
    <form className="form">
      <input className="input1" type="text" value={value} onChange={onChange}></input>
      <button className="button1" onClick={Handlesubmit}> Search</button>
    </form>
  );
};
