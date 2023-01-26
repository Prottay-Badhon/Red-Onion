import React from 'react';
import {Link} from "react-router-dom"
import "./Fooditem.css"
const FoodItem = (props) => {
    const {idMeal,strMeal,strMealThumb}=props.food;
    const showDetails =()=>{
        
    }
    return (
        <div className='food-item' onClick={showDetails}>
            <img src={strMealThumb} alt="" />
            <h5 className='mt-4'>{strMeal}</h5>
            <Link className='fw-bold text-decoration-none' style={{color: "#ff105d"}} to={`/foodDetails/${idMeal}`}>Details</Link>
        </div>
    );
};

export default FoodItem;