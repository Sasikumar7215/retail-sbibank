import React from "react";
import "./UserInfoBanner.css";

export default function UserInfoBanner({ expiryDate, name, email, dateTime }) {
  return (
    <div className="user-banner-container col-md-12">
      
      {/* LEFT SECTION */}
      <div className="banner-left col-md-2">
        <div className="expiry-title">Login Password Expiry Date</div>

        <div className="expiry-value">
          {expiryDate} <a href="calender">Click Here</a> to change
        </div>

        <button className="profile-status-btn">View Profile Status</button>
      </div>
      <div className="col-md-8"></div>
      {/* RIGHT SECTION */}
      <div className="banner-left col-md-2">
      <div className="banner-right">
        <div className="welcome-text">Welcome</div>
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        <div className="user-date">{dateTime}</div>
      </div>
     </div>
    </div>
  );
}
