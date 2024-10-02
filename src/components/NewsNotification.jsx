import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { MdOutlineArrowRightAlt } from "react-icons/md";
// import './styles.css'; // You can add this if you want to further style it

const NewsNotification = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Notifications Section */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="border p-4">
            <h6>Notifications</h6>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <h6 className="text-primary mt-5 text-danger">
              VIEW FULL NEWS ARCHIVE <MdOutlineArrowRightAlt />
            </h6>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="border p-4">
            <h6>Latest News</h6>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <p className="text-primary mt-5">
              Workshop on Electric Vehicles aimed to explore the...
              <br />
              <span className="text-primary disabled">
                <CiAlarmOn /> May 21, 2024
              </span>
            </p>
            <h6 className="text-primary mt-5 text-danger">
              VIEW FULL NEWS ARCHIVE <MdOutlineArrowRightAlt />
            </h6>
          </div>
        </div>

        {/* About College Section */}
        <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
          <div className="border p-4">
            <h6>About our College</h6>
            <img
              className="mt-4 img-fluid"
              src="./images/YT Vid.jpg"
              alt="College Overview"
            />
            <p className="mt-4">
              M Dasan Institute of Technology (M-DIT), Kozhikode was established
              in 2012-13, with seven academic departments. The institute is
              named after the late dynamic visionary...
            </p>
            <h6 className="text-primary mt-5 text-danger">
              LEARN MORE <MdOutlineArrowRightAlt />
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNotification;
