import React from 'react';
import '../../styles/sidebar.css';
import logo from "../../assets/Bitmap.png";
import dashbordLogo from "../../assets/Shapes.png";
import customersLogo from "../../assets/customers.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-placeholder"><img src={logo} alt="" /></div>
      <div className="section-header">PAGES</div>
      <div className="nav-item active">
        <img src={dashbordLogo} alt="" />
        <span>Dashboard</span>
      </div>
      <div className="nav-item">
        <img src={customersLogo} alt="" />
        <span>Customers</span>
      </div>
    </div>
  );
};

export default Sidebar;
