import React from 'react';
import Overview from '../components/Overview';
import Header from '../components/Header';
import Navbarr from '../components/Navbarr';
import AboutBanner from '../components/AboutBanner';
import AboutChair from '../components/AboutChair';
import OurMission from '../components/OurMission';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const About = () => {
  return (
    <div>
      <Header />
      <Navbarr />
      <AboutBanner />
      
      {/* Container for Sidebar and Content */}
      <div className="container-fluid d-flex flex-wrap">
        
        {/* Sidebar */}
        <div className="col-lg-3  col-10  bg-dark m-0">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="col-lg-9">
          <Overview />
          <AboutChair />
          <OurMission />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
