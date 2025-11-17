import React from "react";
import "./Menubar.css";

const Menubar = () => {
  const items = [
    { icon: "/images/whatsapp.png" },
<<<<<<< HEAD
    { icon: "/images/whatsapp.png", label: "Loan offers" },
    { icon: "/images/whatsapp.png", label: "FX-Retail" },
    { icon: "/images/whatsapp.png", label: "Home Loan" },
    { icon: "/images/whatsapp.png", label: "SBI Wealth" },
    { icon: "/images/whatsapp.png", label: "Interest Rates" },
    { icon: "/images/whatsapp.png", label: "Secure OTP" },
    { icon: "/images/whatsapp.png", label: "Customer Care" }
=======
    { icon: "/images/loan.png", label: "Loan offers" },
    { icon: "/images/fx.png", label: "FX-Retail" },
    { icon: "/images/HomeLoanButton.png", label: "" },
    { icon: "/images/wealth.png", label: "SBI Wealth" },
    { icon: "/images/rates.png", label: "Interest Rates" },
    { icon: "/images/otp.png", label: "Secure OTP" },
    { icon: "/images/customer-care.png", label: "Customer Care" }
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
  ];

  return (
    <div className="menu-container">
      {items.map((item, idx) => (
        <div className="menu-item" key={idx}>
<<<<<<< HEAD
          <img src={item.icon} alt="" className="menu-image" />
=======
          <img src={item.icon} alt={item.label} className="menu-image" />
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
          <span className="menu-text">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Menubar;