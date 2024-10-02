import React from "react";

const StudentLife = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Section: Text and Links */}
        <div
          className="col-12 col-lg-6 p-5 text-white"
          style={{
            backgroundImage: "url('./images/bg-4.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundColor: "#dc3545", // Fallback background color
          }}
        >
          <p>Student Life</p>
          <hr style={{ width: "65px", color: "white" }} />
          <h2 className="mt-4">
            Dive into Campus Life <br />@ M-DIT
          </h2>
          <p className="mt-4">
            College life isn't just about academics - it's about exploring your
            passions, making lifelong friends, and building a future you'll
            love. At M-DIT, we offer a vibrant campus community with something
            for everyone. Explore the endless possibilities at M-DIT!
          </p>
          
          {/* Links Section */}
          <div className="row mt-5">
            <div className="col-12 col-md-6">
              <p>Related Links:</p>
              <ul className="list-unstyled">
                <li><b>ARTS CLUB ></b></li>
                <li><b>SPORT CLUB ></b></li>
                <li><b>ECO CLUB ></b></li>
                <li><b>NSS ></b></li>
                <li><b>STUDENT CHAPTERS ></b></li>
                <li><b>IEEE SB MDIT ></b></li>
                <li><b>STUDENTS UNION ></b></li>
                <li><b>TECHNICAL FEST ></b></li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <p>Association Links:</p>
              <ul className="list-unstyled">
                <li><b>CIVIL ENGINEERING ></b></li>
                <li><b>COMPUTER SCIENCE AND ENGINEERING ></b></li>
                <li><b>ELECTRICAL AND ELECTRONICS ENGINEERING ></b></li>
                <li><b>ELECTRONICS AND COMMUNICATION ENGINEERING ></b></li>
                <li><b>MECHANICAL ENGINEERING ></b></li>
                <li><b>ENVIRONMENTAL ENGINEERING ></b></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="col-12 col-lg-6 p-0">
          <img
            src="./images/img4.jpg"
            alt="Campus Life"
            className="img-fluid w-100"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
