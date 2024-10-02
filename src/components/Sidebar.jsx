import React from 'react';
import './Sidebar.css'; // Import the styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar bg-black p-5 w-100">
      <h3 className="sidebar-heading text-white">Explore</h3>
      <ul className="sidebar-list">
        <li className="sidebar-item text-white">Overview</li>
        <li className="sidebar-item">Chairman's Message</li>
        <li className="sidebar-item">Our Mission</li>
        <li className="sidebar-item">Our Vision</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
