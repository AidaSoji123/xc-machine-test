import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineHome } from "react-icons/ai";

const Navbarr = () => {


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
    <>


    {isMobile?(
<>
 

</>
    ):(
      <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="black">
      <Container className="container-fluid ">
         <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-dark ps-5 pe-5 ms-5">
            <Nav.Link href="/"className="me-4 ms-2"><AiOutlineHome /></Nav.Link>
            <Nav.Link href="/about"className="me-4 ms-2">About</Nav.Link>
            <Nav.Link href="/admission"className="me-3 ms-2">Admission</Nav.Link>
            <Nav.Link href="#home"className="me-3 ms-2">Course Offered</Nav.Link>
            <Nav.Link href="/department"className="me-3 ms-2">Department</Nav.Link>
            <Nav.Link href="#pricing"className="me-3 ms-2">Placement</Nav.Link>
            <Nav.Link href="#home"className="me-3 ms-2">Gallery</Nav.Link>
            <Nav.Link href="#features"className="me-3 ms-2">Downloads</Nav.Link>
            <Nav.Link href="#pricing"className="me-3 ms-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar> 
      </>
    )}
   
      
    </>
  );
};

export default Navbarr;
