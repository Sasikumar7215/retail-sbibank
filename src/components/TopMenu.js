import React from "react";
import { useNavigate } from "react-router-dom";
// import "../../global.css";

export default function TopMenu({ active }) {
  const navigate = useNavigate();

  const menu = [
    { key: "accounts", label: "My Accounts & Profile" },
    { key: "payments", label: "Payments / Transfers" },
    { key: "bills", label: "Bill Payments" },
    { key: "deposit", label: "Deposit & Investment" },
    { key: "tax", label: "e-Tax" },
    { key: "services", label: "e-Services" },
    { key: "requests", label: "Requests & Enquiries" },
    { key: "links", label: "Useful Links" },
  ];

  return (
    <div className="topmenu">
      {menu.map((item) => (
        <div
          key={item.key}
          className={`topmenu-item ${
            active === item.key ? "active-tab" : ""
          }`}
          onClick={() => navigate(`/${item.key}`)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9815/9815472.png"
            alt=""
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
