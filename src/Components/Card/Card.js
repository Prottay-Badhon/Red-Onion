import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCar } from "@fortawesome/free-solid-svg-icons";
import breakfast1 from "../../images/breakfast/breakfast1.png";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="my-card">
      <img src={props.image} alt="" />
      <div className="">
        <div className="d-flex mt-3">
          <div className="car-icon">
            <FontAwesomeIcon icon={props.icon} className="" />
          </div>
          <h3>Fast Delivery</h3>
        </div>
        <div className="ms-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            cumque, iusto possimus reiciendis eos deleniti laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
