import React from "react";
import "./Menubar.css";

const Menubar = () => {
  const items = [
    { icon: "/images/whatsapp.png" },
    { icon: "/images/whatsapp.png", label: "Loan offers" },
    { icon: "/images/whatsapp.png", label: "FX-Retail" },
    { icon: "/images/whatsapp.png", label: "Home Loan" },
    { icon: "/images/whatsapp.png", label: "SBI Wealth" },
    { icon: "/images/whatsapp.png", label: "Interest Rates" },
    { icon: "/images/whatsapp.png", label: "Secure OTP" },
    { icon: "/images/whatsapp.png", label: "Customer Care" }
  ];

  return (
    <div className="menu-container">
      {items.map((item, idx) => (
        <div className="menu-item" key={idx}>
          <img src={item.icon} alt="" className="menu-image" />
          <span className="menu-text">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Menubar;