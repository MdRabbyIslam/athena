import React from "react";
import { Container, Row } from "react-bootstrap";
import service1 from "../../../Images/Group 65@2x.png";
import service2 from "../../../Images/Group 66@2x.png";
import service3 from "../../../Images/Group 69@2x.png";
import service4 from "../../../Images/Group 72@2x.png";
import Service from "./Service";

const services = [
  { id: 1, title: "Experience Design", bg: service1 },
  { id: 2, title: "Interface Design", bg: service2 },
  { id: 3, title: "Protyping", bg: service3 },
  { id: 4, title: "Illustrator", bg: service4 },
];

const Services = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center pt-5">What we do</h1>
      <div className="w-25 text-center text-muted mx-auto mb-5">
        <small>
          Our main focus is to make the User Experience very simple and easy.
          Simplicity is our Strength.
        </small>
      </div>
      <Row className="my-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
