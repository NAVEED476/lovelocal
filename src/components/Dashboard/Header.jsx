import React from "react";
import "../../styles/header.css";
import filterIcon from "../../assets/filerIcon.png";
const Header = ({userDetails}) => {
  const {designation,name} = userDetails;
  
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="greeting-section">
            <h1 className="greeting">
              Good afternoon, {name}{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <p className="subtext">Here is what's happening today</p>
          </div>
        </div>
        <div className="decorations">
          <div className="paper-plane"></div>
          <div className="paper-plane small"></div>
          <div className="paper-plane large"></div>
        </div>
      </div>
      <div className="avatar-top-container">
        <div className="avatar-container">
          <div className="avatar"></div>
          <div className="avatar"></div>
          <div className="avatar"></div>
          <div className="avatar"></div>
          <button className="add-avatar avatar">+</button>
        </div>
        <div className="header-right-container">
          <div>
            <img src={filterIcon} alt="" className="filterIcon" />
          </div>
          <div className="date-container">
            <span className="calendar-icon">📅</span>
            <span className="date-range">OCT 15, 2022 - OCT 31, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
