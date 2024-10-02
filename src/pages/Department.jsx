import React from 'react';
import Header from '../components/Header';
import Navbarr from '../components/Navbarr';
import CourseOffr from '../components/CourseOffr';
import CourseSidebar from '../components/CourseSidebar';
import Footer from '../components/Footer';

const Department = () => {
  return (
    <div>
      <Header/>
      <Navbarr/>
      <CourseOffr/>
      <div className="container-fluid col-12 d-flex">
        <div className="col-lg-3"><CourseSidebar/></div>
        <div className="col-lg-9 ps-5 pt-5">
          <p>B.Tech</p>
          <h3>B.Tech Computer Science and Engineering </h3>
          <em className='text-secondary'>Duration:</em> <span className='text-danger'>4 years  </span><span><em className='text-secondary ps-4'> Intake:</em> <span className='text-danger'>60</span></span>
          <div className="d-flex col-lg-12 pt-3">
            <div className="col-lg-7">
            <p className='small'>  The department of Computer Science and Engineering was established in the year <br/>
              2012 with an intake 60 students for the undergraduate programme(B.Tech). The <br/>
              first batch passed out in 2016. It also admits students in the third semester as <br/>
              lateral entry students as per the rules and regulations of AICTE.  </p> <br/>

              <p className='small'>The course has a comprehensive curriculam aimed to provide knowledge,in both <br/>
              theoretical and practical aspects of Computer Science, with an emphasis on <br/>
              practical learning. Core subjects including Programming Languages, Data<br/>
              Structures, Computer Architecture, Dtabase, System Software , Computer<br/>
              Networking and Security. Elective subjects are chosen to help the students to<br/>
               learn more about the various trends in computing like artificial intelligence and <br/>
               Machine Learning. Minor courses are provided for the students to learn <br/>
               interdisciplinary subjects. Honor courses have opted for academically brilliant<br/> students .</p>

            </div>
            <div className="col-lg-5 ps-5"><img src='./images/img2.jpg' alt='...' className='img-fluid w-75 h-75 ps-2'/></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Department;
