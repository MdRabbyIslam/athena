import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../Images/logo.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "white" }}
        variant="light"
        className="p-3"
      >
        <Navbar.Brand href="#home">
          <img
            style={{ width: "120px" }}
            className=" h-auto"
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto font-weight-bold text-center">
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link href="#deets">Pricing</Nav.Link>
            <Nav.Link href="#deets">Our Team</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <span className="ourBtn"> Contact us</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
