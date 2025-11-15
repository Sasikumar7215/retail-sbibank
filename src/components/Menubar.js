import React from "react";
import "./Menubar.css";

const Menubar = () => {
  const items = [
    { icon: "/images/whatsapp.png" },
    { icon: "/images/loan.png", label: "Loan offers" },
    { icon: "/images/fx.png", label: "FX-Retail" },
    { icon: "/images/HomeLoanButton.png", label: "" },
    { icon: "/images/wealth.png", label: "SBI Wealth" },
    { icon: "/images/rates.png", label: "Interest Rates" },
    { icon: "/images/otp.png", label: "Secure OTP" },
    { icon: "/images/customer-care.png", label: "Customer Care" }
  ];

  return (
    <div className="menu-container">
      {items.map((item, idx) => (
        <div className="menu-item" key={idx}>
          <img src={item.icon} alt={item.label} className="menu-image" />
          <span className="menu-text">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Menubar;