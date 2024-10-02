import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './pages/About';
// import Home from './pages/Home';


// import Header from './components/Header';
// import Navbarr from './components/Navbarr';
// import Notify from './components/Notify';
// import ImageContainer1 from './components/ImageContainer1';
// import ChairMessage from './components/ChairMessage';
// import NewsNotification from './components/NewsNotification';
// import Statistics from './components/Statistics';
// import Btech from './components/Btech';
// import StudentLife from './components/StudentLife';
// import Events from './components/Events';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div>
//      {/* <Header/>
//      <Navbarr/>
//      <Notify/>
//      <ImageContainer1/>
//      <ChairMessage/>
//      <NewsNotification/>
//      <Statistics/>
//      <Btech/>
//      <StudentLife/>
//      <Events/>
//      <Footer/> */}


//      {/* <Home/> */}
//      {/* <About/> */}






     
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';

import Department from './pages/Department';


const App = () => {
  return (
    <Router>
      {/* <Navbarr /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
      
        <Route path="/department" element={<Department />} />
      
        
   
      </Routes>
    </Router>
  );
};

export default App;



