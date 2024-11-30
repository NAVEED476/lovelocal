import React from "react";
import "../../styles/topNavbar.css";
import info from "../../assets/info.png";
import messageIcon from "../../assets/messageNotification.png";
import searchIcon from "../../assets/search.png";
import dropDown from "../../assets/dropdown.png";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="nav-icon">
        <img src={searchIcon} alt="" />
      </div>
      <div className="nav-icon notification">
        <img src={messageIcon} alt="" />
        {/* <span className="notification-dot"></span> */}
      </div>
      <div className="nav-icon">
        <img src={info} alt="" />
      </div>
      <div className="user-name">
        <div className="user-dropdown">
          <select className="user-select">
            <option>Himanshu</option>
            <option>Settings</option>
            <option>Logout</option>
          </select>
          <img src={dropDown} alt="Dropdown Icon" className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
