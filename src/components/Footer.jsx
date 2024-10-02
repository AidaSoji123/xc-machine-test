import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-danger pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-5 mb-4">
            <hr className="text-light p-2" />
            <h6 className="text-danger">Quick Links</h6>
            <div className="row">
              <div className="col-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="footer-link">
                      Academics
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      Departments
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      Facilities
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="footer-link">
                      Life @ M-DIT
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      Placement
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="footer-link">
                      Alumni
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="col-md-2 text-center mb-4">
            <img
              src="./images/flog.png"
              alt="M-DIT Logo"
              className="flog-logo mb-3 img-fluid"
              style={{ maxHeight: "100px" }}
            />
          </div>

          {/* Address and Contact Section */}
          <div className="col-md-5 mb-4">
            <hr className="text-light" />
            <div className="row">
              <div className="col-6 p-2">
                <h6 className="text-danger">Address</h6>
                <p className="footer-address text-light">
                  Ulliyeri PO, Kozhikode Dist,
                  <br />
                  Kerala, India
                  <br />
                  Pin: 673 323
                </p>
              </div>
              <div className="col-6 p-2">
                <h6 className="text-danger">Primary Contact</h6>
                <p className="mb-1 text-light">Phone: 091-880 42 610</p>
                <p className="mb-1 text-light">0496 266 47 00</p>
                <p className="mb-3 text-light">Email: principal@mdit.ac.in</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Social Links and Copyright Section */}
        <div className="row bg-black text-light py-3 m-0">
          <div className="col-lg-4 col-sm-12 mb-3 mb-lg-0 d-flex justify-content-lg-start justify-content-center">
            <p className="mb-0">FOLLOW M-DIT ONLINE</p>
            <div className="ms-3 d-flex">
              <a href="/" className="footer-social-link me-3">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="footer-social-link me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/" className="footer-social-link me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="footer-social-link me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="footer-social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-8 text-center text-lg-end">
            <p className="mb-0 mt-3 mt-lg-0">
              &copy; 2024 M. Dasan Institute of Technology. All rights reserved.
            </p>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
