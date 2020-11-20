import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div className="body mt-5">
            <div class="container">
                            <div className="mb-3 head">
                                <h1 className="font-weight-bold headings">Get your design right, right now</h1>
                                <h6>Be the first know our offers and updates</h6>
                            </div>
                    <br/>
                    <div class="row justify-content-center">
                        <div class="a-card col-10 col-md-10 col-lg-8 shadow mb-1 bg-white rounded">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    {/* <!--end of col--> */}
                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Enter Your Email Address"/>
                                    </div>
                                    {/* <!--end of col--> */}
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success btn-src" type="submit">Get Started</button>
                                    </div>
                                    {/* <!--end of col--> */}
                                </div>
                            </form>
                        </div>
                        {/* <!--end of col--> */}
                    </div>
</div>
        </div>
    );
};

export default SearchBar;