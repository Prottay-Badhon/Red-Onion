import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="my-footer">
      <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="footer-info">
        <ul>
          <li>About online food</li>
          <li>Read our blog</li>
          <li>Sign up to deliver</li>
          <li>Add your restaurant</li>
        </ul>
        <ul>
          <li>Get help</li>
          <li>Read FAQs</li>
          <li>View all client</li>
          <li>Restaurant near me</li>
        </ul>
      </div>
      <div className="copy-right">
        <p>Copyright@2023</p>
      </div>
      <div className="privacy">
        <ul className="d-flex">
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Pricing</li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
