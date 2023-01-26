import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import MenuCategory from "../MenuCategory/MenuCategory";

const Dinner = () => {
  return (
    <div className="">
      <MenuCategory></MenuCategory>
      <div className="breakfast-container">
        <div className="food-container">
          <FoodItem></FoodItem>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
