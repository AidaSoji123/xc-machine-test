import React from "react";

const Btech = () => {
  return (
    <div className="d-flex flex-wrap">
      {/* Left Sidebar */}
      <div
        className="m-2 mt-5 mb-4 p-3 ms-4 col-lg-2 col-md-4 col-sm-6 col-11"
        style={{ backgroundColor: "#f7e1ad" }}
      >
        <div className="col-12 border border-danger h-100 w-100 p-2">
          <u>
            <h6 className="mb-2 mt-3">Academics</h6>
          </u>
          <h6 className="text-danger mt-5">
            Find Your Area
            <br /> of Study
          </h6>
          <p className="mb-3 mt-3">
            At M-DIT, the options we offer various courses both at UG and PG
            level.
          </p>
          <center>
            <button className="btn btn-dark btn-sm pe-3 ps-3">ALL COURSES</button>
          </center>
        </div>
      </div>

      {/* Course Card 1 */}
      <div className="col-lg-2 d-md-block d-sm-none d-lg-block d-none border-end border-start border-top m-4 ms-4 p-3">
        <em>
          <p>Bachelor of Technology</p>
        </em>
        <h6 className="text-danger">
          Electronics and Computer <br />
          Engineering
        </h6>
        <p>Undergraduate</p>
        <span className="col-12">
          <img
            src="./images/Frame 427318941.jpg"
            className="img-fluid"
            alt="Electronics and Computer Engineering"
          />
        </span>
      </div>

      {/* Course Card 2 */}
      <div className="col-lg-2 d-md-block d-sm-none d-lg-block d-none border-end border-start border-top m-4 ms-0 p-3">
        <em>
          <p>Bachelor of Technology</p>
        </em>
        <h6 className="text-danger pb-3">Cyber Security</h6>
        <p>Undergraduate</p>
        <span className="col-12">
          <img
            src="./images/img1.png"
            className="img-fluid"
            alt="Cyber Security"
          />
        </span>
      </div>

      {/* Course Card 3 */}
      <div className="col-lg-2 d-md-block d-sm-none d-lg-block d-none border-end border-start border-top m-4 ms-0 p-3">
        <em>
          <p>Master of Technology</p>
        </em>
        <h6 className="text-danger">
          Environmental
          <br />
          Engineering
        </h6>
        <p>Postgraduate</p>
        <span className="col-12">
          <img
            src="./images/img3.jpg"
            className="img-fluid"
            alt="Environmental Engineering"
          />
        </span>
      </div>

      {/* Course Card 4 */}
      <div className="col-lg-2 d-md-block d-sm-none d-lg-block d-none border-end border-start border-top m-4 ms-0 p-3">
        <em>
          <p>Bachelor of Technology</p>
        </em>
        <h6 className="text-danger">
          Computer Science and <br />
          Engineering
        </h6>
        <p>Undergraduate</p>
        <span className="col-12">
          <img
            src="./images/img2.jpg"
            className="img-fluid"
            alt="Computer Science and Engineering"
          />
        </span>
      </div>
    </div>
  );
};

export default Btech;
