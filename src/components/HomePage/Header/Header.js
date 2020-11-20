import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import headerbg from "../../../Images/headerbg.png";
import NavigationBar from "./NavigationBar";
import group46 from "../../../Images/Group 49.png";

const Header = () => {
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <Row className="align-items-center">
        <Col md={5}>
          <h1 style={{ fontSize: "60px", color: "black" }}>
            Florence <br /> agency
          </h1>
          <p className="text-muted my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            assumenda accusamus sunt numquam magnam, odio ea placeat tempora
            ipsum consequuntur tenetur eum of
          </p>
          <button className="ourBtn">See Pricing</button>
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <img src={headerbg} alt="" className="h-100 w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
