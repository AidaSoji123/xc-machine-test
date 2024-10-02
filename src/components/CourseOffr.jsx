import React from 'react';

const CourseOffr = () => {
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
        ><h3>Courses Offered > B.Tech</h3></div>
    </div>
  );
}

export default CourseOffr;
