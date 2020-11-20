import React from "react";
import "./Service.css";
import { Col } from "react-bootstrap";

const Service = ({ service }) => {
  return (
    <Col lg={3} md={6} sm={12} className="service text-center py-5">
      <img
        src={service.bg}
        style={{ width: "80px" }}
        className=" h-auto"
        alt=""
      />
      <h5 className="pt-3">{service.title}</h5>
      <p className="w-75 mx-auto">
        <small className="text-muted">
          The point of using Lorem Ipsum is that it has a more-orless normal
        </small>
      </p>
    </Col>
  );
};

export default Service;
