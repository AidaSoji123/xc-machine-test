import React from "react";

const OurMission = () => {
  return (
    <div 
   
    >
      <div
        className="col-12  p-5 text-white bg-primary"
        style={{
          background: "linear-gradient(to right, #0889cf, #244f66)"
        }}
      >
        <div  style={{
      backgroundImage: "url('./images/bg-5.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize:"300px"
      // backgroundColor: "#dc3545", // Fallback background color
    }}>
        <p>Our Mission</p>
        <hr style={{ width: "65px", color: "white" }} className=" pb-3" />
        <p style={{ fontSize: "small" }}>
          {" "}
          To provide high quality education through a creative balance of in
          house,academic,professional and extracurricular programs; <br />
          To contribute to the nation's technological and engineering base
          through innovation in education, research and transfer of concepts and
          results; <br />
          To maintain a diverse ,collegial, open and supportive environment that
          encourages discovery, creativity and professional developments.
        </p>
        <p className="mt-5 pt-3">Our Vision</p>
        <hr style={{ width: "65px", color: "white" }} className=" pb-3" />
        <p style={{ fontSize: "small" }}>
          To provide high quality education through a creative balance of in
          house,academic,professional and extracurricular programs; <br />
          To contribute to the nation's technological and engineering base
          through innovation in education, research and transfer of concepts and
          results; <br />
          To maintain a diverse ,collegial, open and supportive environment that
          encourages discovery, creativity and professional developments.
        </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
