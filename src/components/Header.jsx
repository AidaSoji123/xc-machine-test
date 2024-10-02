import React, { useEffect, useState } from 'react';
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineHome } from "react-icons/ai";


const Header = () => {

  const [isMobile, setIsMobile] = useState(false);


  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call handler once when the component mounts
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <nav className="navbar navbar-expand-lg d-none d-lg-block" style={{ backgroundColor: '#F2F2F2' }}>
    //   <div className="container-fluid">
        // <div className="logo">
        //   <img src="./images/MDIT Logo.jpg" alt="MDIT Logo" />
        // </div>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto d-flex align-items-center">
    //         <a href="login" className="me-2">
    //           ET Lab Login
    //         </a>
    //         <li className="nav-item ps-3">
    //           <button className="btn border border-danger nav-link">
    //             ADMISSION
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <div  className="container-fluid p-0">
       <Navbar collapseOnSelect  expand="lg" bg="light" variant="dark">

      {/* <Container className='container-fluid'> */}
      <div className="logo p-0 m-0">
          <img src="./images/MDIT Logo.jpg" alt="MDIT Logo"/>
        </div>

        {isMobile?(
          <>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"className='bg-dark'/>
        <Navbar.Collapse id="responsive-navbar-nav " className='bg-dark'>
          <Nav className="mr-auto text-white ">
            <Nav.Link href="/"className="me-4 ms-0"><AiOutlineHome /></Nav.Link>
            <Nav.Link href="/about"className="me-4">About</Nav.Link>
            <Nav.Link href="/admission"className="me-3">Admission</Nav.Link>
            <Nav.Link href="#home"className="me-1">Course Offered</Nav.Link>
            <Nav.Link href="/department"className="me-3 ms-2">Department</Nav.Link>
            <Nav.Link href="#pricing"className="me-2 ms-2">Placement</Nav.Link>
            <Nav.Link href="#home"className="me-5 ms-2">Gallery</Nav.Link>
            <Nav.Link href="#features"className="me-5 ms-2">Downloads</Nav.Link>
            <Nav.Link href="#pricing"className="me-3 ms-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </>
        ):(
          <></>
        )}
        
      {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default Header;
