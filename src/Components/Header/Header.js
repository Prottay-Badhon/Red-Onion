import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo2 from "../../images/logo2.png"
import "./Header.css";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand href="#home"><img src={logo2} alt="" srcset="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar">
          <Link to="/Home" className="text-decoration-none">Home</Link>
            <Link to="/login" className="ms-2 text-decoration-none">Login</Link>
            <Nav.Link eventKey={2} href="#memes">
              <button className="btn-signup"> Sign Up</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
