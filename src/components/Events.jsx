import React from "react";
import { CiAlarmOn } from "react-icons/ci";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Events = () => {
  return (
    <div className="container">
      <div className="p-5 pb-0">
        <p>Events & Calendar</p>
        <hr style={{ width: "65px", paddingLeft: "20px" }} />
      </div>
      <div className="row p-5">
        {/* Event Card 1 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="d-flex border border-gray">
            <div className="col-4 ps-3" style={{ backgroundColor: "#f7e1ad" }}>
              <h1 className="text-danger pt-3 pb-0 mt-2">10</h1>
              <p>
                September <br /> 2024
              </p>
            </div>
            <div className="col-8 ps-1">
              <p>
                Sports Day on September <br />
                First Week.
              </p>
              <p style={{ fontSize: "small", color: "gray" }}>
                <CiAlarmOn />
                09:00AM - 05:00PM
              </p>
              <p style={{ fontSize: "small", color: "red" }}>
                READ MORE
                <MdOutlineArrowRightAlt />
              </p>
            </div>
          </div>
        </div>
        
        {/* Event Card 2 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="d-flex border border-gray">
            <div className="col-4 ps-3" style={{ backgroundColor: "#f7e1ad" }}>
              <h1 className="text-danger pt-3 pb-0 mt-2">10</h1>
              <p>
                September <br /> 2024
              </p>
            </div>
            <div className="col-8 ps-1">
              <p>
                Sports Day on September <br />
                First Week.
              </p>
              <p style={{ fontSize: "small", color: "gray" }}>
                <CiAlarmOn />
                09:00AM - 05:00PM
              </p>
              <p style={{ fontSize: "small", color: "red" }}>
                READ MORE
                <MdOutlineArrowRightAlt />
              </p>
            </div>
          </div>
        </div>
        
        {/* Event Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="d-flex border border-gray">
            <div className="col-4 ps-3" style={{ backgroundColor: "#f7e1ad" }}>
              <h1 className="text-danger pt-3 pb-0 mt-2">10</h1>
              <p>
                September <br /> 2024
              </p>
            </div>
            <div className="col-8 ps-1">
              <p>
                Sports Day on September <br />
                First Week.
              </p>
              <p style={{ fontSize: "small", color: "gray" }}>
                <CiAlarmOn />
                09:00AM - 05:00PM
              </p>
              <p style={{ fontSize: "small", color: "red" }}>
                READ MORE
                <MdOutlineArrowRightAlt />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pb-0 text-center">
        <p style={{ color: "red" }}>
          VIEW FULL CALENDAR <MdOutlineArrowRightAlt />
        </p>
      </div>
    </div>
  );
};

export default Events;
