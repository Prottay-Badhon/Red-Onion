import React from 'react'
import Card from '../Card/Card'
import image1 from "../../images/adult-blur-blurred-background-687824.png"
import image2 from "../../images/chef-cook-food-33614.png"
import image3 from "../../images/architecture-building-city-2047397.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCar,faBell,faBus } from "@fortawesome/free-solid-svg-icons";
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='why-choose'>
            <h2>Why you choose us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, placeat nam minus natus veritatis minima quia at veniam quibusdam,</p>
        </div>

        <div className="chef-info">
        <div className="card-container">
            <Card image={image1} icon={faBus}></Card>
            <Card image={image2} icon={faBell}></Card>
            <Card image={image3} icon={faCar}></Card>

        </div>
        </div>
    </div>
  )
}

export default About
