import React from "react";
import "../../styles/header.css";
import filterIcon from "../../assets/filerIcon.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import plusIcon from "../../assets/Path.png";
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
          <div className="avatar"><img src={image1} alt="" /></div>
          <div className="avatar"><img src={image2} alt="" /></div>
          <div className="avatar"><img src={image3} alt="" /></div>
          <div className="avatar"><img src={image4} alt="" /></div>
          <button className="add-avatar avatar"><img src={plusIcon} alt="" /></button>
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
