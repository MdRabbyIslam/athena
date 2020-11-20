import React from "react";
import './Pricing.css'

const Pricing = () => {
  return (
    <div className="container prc-body">
                  <div className="row mt-4">
                <div className="col-md-12 mx-auto">
                    {/* <!-- Section title--> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-5 d-flex justify-content-center">
                                <h1 className="font-weight-bold headings">Choose Your Dedicated Team</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!--End section title--> */}
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- Pricing Card --> */}
                            <div className="pricing-card">
                                <div className="a-card card shadow mb-5 bg-white rounded text-center mt-1">
                                    {/* <!-- Header --> */}
                                    <header className="card-header bg-white p-3 crd-mar">
                                        <span className="d-block">
                                            <span className="display-2 text-dark font-weight-bold">
                                              $199
                                            </span>
                                            <h6 className="text-primary mb-1">For Basic</h6>
                                        </span>
                                    </header>
                                    {/* <!-- End Header --> */}
                                    {/* <!-- Content --> */}
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item  font-weight-bold">Homepage</li>
                                            <li className="list-group-item  font-weight-bold">No Inner Page</li>
                                            <li className="list-group-item  font-weight-bold">Asset file</li>
                                            <li className="list-group-item  font-weight-bold">Source file</li>
                                            <li className="list-group-item  font-weight-bold">Free Stock Photos</li>
                                            <li className="list-group-item  font-weight-bold">10 Days Free Support</li>
                                            <li className="list-group-item  font-weight-bold">24/7 Support</li>
                                        </ul>
                                        <button type="button" className="btn-styled btn btn-primary btn-block animate-up-1" tabindex="0">Order Now</button>
                                    </div>
                                    {/* <!-- End Content --> */}
                                </div>
                            </div>
                            {/* <!-- End of Pricing Card --> */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- Pricing Card --> */}
                            <div className="pricing-card">
                                <div className="a-card card shadow mb-5 bg-white rounded text-center mt-1">
                                    {/* <!-- Header --> */}
                                    <header className="card-header bg-white p-3 crd-mar">
                                        <span className="d-block ">
                                            <span className="display-2 text-dark font-weight-bold">
                                              $399</span>
                                            <h6 className="text-primary mb-1">For Preferred</h6>
                                        </span>
                                    </header>
                                    {/* <!-- End Header --> */}
                                    {/* <!-- Content --> */}
                                    <div className="card-body">
                                        <ul className="list-group font-weight-bold">
                                        <li className="list-group-item  font-weight-bold">Homepage</li>
                                            <li className="list-group-item  font-weight-bold">4 Inner Page</li>
                                            <li className="list-group-item  font-weight-bold">Asset file</li>
                                            <li className="list-group-item  font-weight-bold">Source file</li>
                                            <li className="list-group-item  font-weight-bold">Free Stock Photos</li>
                                            <li className="list-group-item  font-weight-bold">20 Days Free Support</li>
                                            <li className="list-group-item  font-weight-bold">24/7 Support</li>
                                        </ul>
                                        <button type="button" className="btn-styled btn btn-secondary btn-block animate-up-1" tabindex="0">Order Now</button>
                                    </div>
                                    {/* <!-- End Content --> */}
                                </div>
                            </div>
                            {/* <!-- End of Pricing Card --> */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* <!-- Pricing Card --> */}
                            <div className="pricing-card">
                                <div className="a-card card shadow mb-5 bg-white rounded text-center mt-1">
                                    {/* <!-- Header --> */}
                                    <header className="card-header bg-white p-3 crd-mar">
                                        <span className="d-block">
                                            <span className="display-2 text-dark font-weight-bold">
                                            $599</span>
                                            <h6 className="text-primary mb-1">For Elite</h6>
                                        </span>
                                    </header>
                                    {/* <!-- End Header --> */}
                                    {/* <!-- Content --> */}
                                    <div className="card-body">
                                        <ul className="list-group">
                                        <li className="list-group-item  font-weight-bold">Homepage</li>
                                            <li className="list-group-item  font-weight-bold">8 Inner Page</li>
                                            <li className="list-group-item  font-weight-bold">Asset file</li>
                                            <li className="list-group-item  font-weight-bold">Source file</li>
                                            <li className="list-group-item  font-weight-bold">Free Stock Photos</li>
                                            <li className="list-group-item  font-weight-bold">30 Days Free Support</li>
                                            <li className="list-group-item  font-weight-bold">24/7 Support</li>
                                        </ul>
                                        <button type="button" className="btn btn-tertiary btn-block animate-up-1 btn-styled" tabindex="0">Order Now</button>
                                    </div>
                                    {/* <!-- End Content --> */}
                                </div>
                            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Pricing;
