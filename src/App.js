import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Lunch from "./Components/Lunch/Lunch";
import Dinner from "./Components/Dinner/Dinner";
import SearchFood from "./Components/SearchFood/SearchFood";
import MenuCategory from "./Components/MenuCategory/MenuCategory";
import Foods from "./Components/Foods/Foods";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/foods/:foodCategory" element={<Foods></Foods>}></Route>
        <Route path="/foodDetails/:foodId" element={<FoodDetails></FoodDetails>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
