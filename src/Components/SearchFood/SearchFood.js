import React from "react";
import "./SearchFood.css";
const SearchFood = () => {
  return (
    <div className="search-container">
      <div className="search-info-container">
        <div className="">
          <h1>Best food waiting for your belly</h1>
        </div>
        <div className="mt-4">
          <form>
            <div className="search-box">
            <input type="text" placeholder="Search food items" className="input-search"/>
            <button className="btn-search">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFood;
