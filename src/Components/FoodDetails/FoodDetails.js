import { Button } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetails.css";
const FoodDetails = () => {
  const { foodId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.meals[0]));
  }, []);
  console.log(details);
  const {
    strMeal,
    strInstructions,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = details;
  return (
    <div className="food-details-info">
      <div className="food-details">
        <div className="description">
          <h1>{strMeal}</h1>
          <p className="mt-4 text-muted">{strInstructions}</p>
          <div className="d-flex align-items-center">
            <h2>$55</h2>
              <button className="btn">-</button>
              <input type="number" name="" id="" className="text-center" style={{width: "80px"}} />
              <button className="btn">+</button>
          </div>
          <button  className="add-btn">Add</button>
        </div>
        <div className="img-container text-center">
          <img src={strMealThumb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
