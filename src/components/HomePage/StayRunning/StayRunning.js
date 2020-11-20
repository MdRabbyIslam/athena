import React from "react";
import './StayRunning.css'
import runImg from "../../../Images/20 [Converted]@2x.png"

const StayRunning = () => {
  return (
    <div className="container mb-5 pb-4 mt-5 running">

      <div className="row justify-content-between align-items-center">

        <div className="col-md-5 runImage ">
          <img src={runImg} alt="" />
        </div>

        <div className="col-md-6 details">
          <h1>Stay Running {'&'} Project</h1>
          <small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter. </small>

          <br />
          <button type="button" class="btn btn-primary mt-3">Contact us </button>
        </div>

      </div>

    </div>
  );
};

export default StayRunning;
