import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./MenuCategory.css";
const MenuCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <nav className="menu-category">
      <div className="menu-list">
        {categories.map((menu) => (
          <NavLink to={`/foods/${menu.strCategory}`} className={({ isActive }) =>
          isActive ? "active-link-style" : "link-style"
        }>
            {menu.strCategory}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MenuCategory;
