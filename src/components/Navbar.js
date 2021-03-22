import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="text">
      <ReactBootStrap.Navbar collapseOnSelect className="logo" expand="xl">
        <ReactBootStrap.Navbar.Brand href="#home" className="jerry">
          <Link to="/home"> jerrysipHAIR</Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="portfolio mr-auto">
            <ReactBootStrap.Nav.Link to="/portfolio">
              <NavDropdown title="Portfolio" id="nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/bridal">Bridal</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/editorial">Editorial</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/fashion-week">Fashion Week</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mens">Mens</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/press">Press</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="contact" to="/contact">
              <Link to="/contact">Contact</Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="about" to="/about">
              <Link to="/about">About</Link>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
