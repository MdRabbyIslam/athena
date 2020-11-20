import React from "react";
import logo from "../../../Images/logo.png"
import fb from "../../../Images/fb.png"
import twitter from "../../../Images/twitter.png"
import linkedin from "../../../Images/linkedin.png"
import dribbble from "../../../Images/dribbble.png"
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer mb-5">
      {/* <!-- Footer --> */}
                        <footer class="page-footer font-small stylish-color-dark pt-4">

                    {/* <!-- Footer Links --> */}
                    <div class="container text-center text-md-left">

                      {/* <!-- Grid row --> */}
                      <div class="row">

                        {/* <!-- Grid column --> */}
                        <div class="col-md-4 col-12 mx-auto">

                          {/* <!-- Content --> */}
                          <img className="logo mt-5 mb-3" src={logo} alt=""/>
                        
                          {/* <!-- Social buttons --> */}
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">
                      <img class="btn-floating logo-icon mx-1" src={fb} alt="">
                        </img>
                      </li>
                      <li class="list-inline-item">
                      <img class="btn-floating logo-icon mx-1" src={twitter} alt="">
                        </img>
                      </li>
                      <li class="list-inline-item">
                        <img class="btn-floating logo-icon mx-1" src={linkedin} alt="">
                        </img>
                      </li>
                      <li class="list-inline-item">
                      <img class="btn-floating logo-icon mx-1" src={dribbble} alt="">
                        </img>
                      </li>
                    </ul>
                    {/* <!-- Social buttons --> */}

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr class="clearfix w-100 d-md-none"/>

                        {/* <!-- Grid column --> */}
                        <div class="col-md-2 mx-auto">

                          {/* <!-- Links --> */}

                          <ul class="list-unstyled mt-5">
                              <p>Features</p>
                              <p>Enterprise</p>
                              <p>Pricing</p>
                          </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr class="clearfix w-100 d-md-none"/>

                        {/* <!-- Grid column --> */}
                        <div class="col-md-2 mx-auto">

                          {/* <!-- Links --> */}
                          <ul class="list-unstyled mt-5">
                              <p>About Us</p>
                              <p>Terms of Service</p>
                              <p>Security</p>
                              <p>Login</p>
                          </ul>
                        </div>
                        {/* <!-- Grid column --> */}

                        <hr class="clearfix w-100 d-md-none"/>

                        {/* <!-- Grid column --> */}
                        <div class="col-md-2 mx-auto">

                          {/* <!-- Links --> */}

                          <ul class="list-unstyled mt-5">
                              <p>Blog</p>
                              <p>Help Center</p>
                              <p>Contact Us</p>
                              <p>Status</p>
                          </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                      </div>
                      {/* <!-- Grid row --> */}

                    </div>
                    {/* <!-- Footer Links --> */}

                    {/* <!-- Call to action --> */}
                  </footer>
                
                  {/* <!-- Footer --> */}
</div>
  );
};

export default Footer;
