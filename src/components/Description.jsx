import React from 'react';

const Description = () => {
  return (
    <div>
      <div className="container-fluid d-flex">
        <div className="col-lg-7 bg-black d-flex">
          <div className="col-3 p-5">
            <p className='text-danger'>Heading</p>
            <p className='text-light'>Option1</p>
            <p className='text-light'>Option2</p>
            <p className='text-light'>Option3</p>
            <p className='text-light'>Option4</p>
            <p className='text-light'>Option5</p>
          </div>
          <div className="col-3 p-3 pt-5">
            <p className='text-danger'>Heading</p>
            <p className='text-light'>Option1</p>
            <p className='text-light'>Option2</p>
            <p className='text-light'>Option3</p>
            <p className='text-light'>Option4</p>
            <p className='text-light'>Option5</p>
          </div>
         
        </div>
        <div className="col-lg-5 bg-danger opacity-100 p-2 pt-5 ps-5 text-light"
         style={{
          backgroundImage: "url('./images/bbg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundColor: "#dc3545", // Fallback background color
        }}>
          <h6 className='pt-4'>Description Title</h6>
          <br/>
          <p style={{fontSize:'small'}}>College life isn't just about academics - it's about exploring your <br/>
          passions, making life long friends, and building a future you'll love. <br/>
          At M-DIT, we offer a vibrant campus community with something for <br/>
          everyone. Explore the endless possibilities at M-DIT!</p>

        </div>
      </div>
    </div>
  );
}

export default Description;
