import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodItem from "../FoodItem/FoodItem";
import MenuCategory from "../MenuCategory/MenuCategory";
import "./Foods.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const {foodCategory} = useParams();
 
console.log(foodCategory);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [foodCategory]);
  console.log(foods);
  return (
    <div className="">
      <MenuCategory></MenuCategory>
      <div className="breakfast-container">
        <div className="food-container">
          {foods.map((food) => (
            <FoodItem food={food} key={food.idMeal}></FoodItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
