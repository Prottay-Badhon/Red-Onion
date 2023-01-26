import React from "react";
import { Route, Routes } from "react-router-dom";
import Breakfast from "../Foods/Foods";
import Dinner from "../Dinner/Dinner";
import Login from "../Login/Login";
import Lunch from "../Lunch/Lunch";
import MenuCategory from "../MenuCategory/MenuCategory";
import SearchFood from "../SearchFood/SearchFood";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <SearchFood></SearchFood>
      <MenuCategory></MenuCategory>
      <About></About>
    </div>
  );
};

export default Home;
