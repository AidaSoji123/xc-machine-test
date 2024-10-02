import React from 'react';
import Header from '../components/Header';
import Navbarr from '../components/Navbarr';

import ImageContainer1 from '../components/ImageContainer1';
import ChairMessage from '../components/ChairMessage';
import NewsNotification from '../components/NewsNotification';
import Statistics from '../components/Statistics';
import Btech from '../components/Btech';
import StudentLife from '../components/StudentLife';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Description from '../components/Description';

const Admission = () => {
  return (
    <div>
         <Header/>
      <Navbarr/>
      <Description/>
   
     <ImageContainer1/>
     <ChairMessage/>
     <NewsNotification/>
     <Statistics/>
     <Btech/>
     <StudentLife/>
     <Events/>
     <Footer/>
    </div>
  );
}

export default Admission;
