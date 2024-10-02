import React from 'react';
import './Sidebar.css'; // Import the styles for the sidebar

const CourseSidebar = () => {
  return (
    <div className="sidebar bg-black p-5 w-100">
      <h3 className="sidebar-text text-white">Courses</h3>
      <ul className="sidebar-list">
        <li className="sidebar-item text-white">B.Tech</li>
        <li className="ps-2 text-secondary"><br/>Civil Engineering <br/> <br/>Computer Science and Engineering
        <br/> <br/>Electrical and Electronics Engineering <br/> <br/>Electronics and Communication Engineering <br/> <br/>
        Mechanical Engineering <br/> <br/>
        Environmental Engineering</li>
        <li className="sidebar-item">M.Tech</li>
       
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default CourseSidebar;
