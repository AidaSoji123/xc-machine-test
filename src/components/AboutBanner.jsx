import React from 'react';

const AboutBanner = () => {
  return (
    <div>
      <div
          className="col-12  p-5 text-white bg-danger"
         

          style={{
            backgroundImage: "url('./images/bg-4.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundColor: "#dc3545", // Fallback background color
          }}
        ><h3>About M-DIT</h3></div>
    </div>
  );
}

export default AboutBanner;
