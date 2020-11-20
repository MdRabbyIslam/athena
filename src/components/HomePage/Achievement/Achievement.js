import React from "react";
import "./Achievement.css"

import happy from '../../../Images/happy@2x.png'
import marketing from '../../../Images/marketing@2x.png'
import surface from '../../../Images/surface1@2x.png'
import transportation from '../../../Images/transportation@2x.png'

const Achievement = () => {
  return (
    <section className="container mb-5 pb-4 mt-5">

      <div className="row d-flex justify-content-between">

        <div className="col-md-5 mt-5 pt-2 text1">
          <h1>Our Achievements</h1>
          <p>It is long established fact that a reader will be distracted by the readable content  of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letter</p>
        </div>


        <div className="col-md-7">

          {/* /////////////// */}

          <div className="row m-2 p-2">

            <div className="col-md-6">
              <div className="m-3">
                <div className="d-flex awesomeGrid justify-content-center">
                  <div className="images happy">
                    <img className="mt-4 " src={happy} alt="" />
                  </div>
                  <div className="ml-2 mt-2 text">
                    <h2>700+</h2>
                    <p>Happy Clients</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              <div className="m-3">
                <div className="d-flex awesomeGrid2 justify-content-center">
                  <div className="images">
                    <img className="mt-4" src={marketing} alt="" />
                  </div>
                  <div className="ml-2 mt-2 text">
                    <h2>140+</h2>
                    <p>Project Completed</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* //////////////////////////// */}

          <div className="row m-2 p-2">

            <div className="col-md-6">
              <div className="m-3">
                <div className="d-flex awesomeGrid3 justify-content-center">
                  <div className="images">
                    <img className="mt-4" src={surface} alt="" />
                  </div>
                  <div className="ml-2 mt-2 text">
                    <h2>25+</h2>
                    <p>Crazy Minds</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="m-3">
                <div className="d-flex awesomeGrid4 justify-content-center">
                  <div className="images">
                    <img className="mt-4" src={transportation} alt="" />
                  </div>
                  <div className="ml-2 mt-2 text">
                    <h2>75+</h2>
                    <p>Running Projects</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ////////////////////////// */}

        </div>
      </div>
    </section>
  );
};

export default Achievement;
