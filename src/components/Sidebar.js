import React, { useState } from "react";
<<<<<<< HEAD
import "./Sidebar.css";
=======

>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
export default function Sidebar({ items, active, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <>
<<<<<<< HEAD
      {/* Mobile toggle button */}
      <button 
        className="sidebar-toggle d-md-none"
        onClick={() => setOpen(!open)}
      >
        ☰ MENU
      </button>

      {/* Sidebar main box */}
      <div className={`sidebar-container ${open ? "open" : ""}`}>

        {/* Sidebar title */}
        

        {/* Sidebar item list */}
        <div className="sidebar-list">
          {items.map((item) => (
            <div
              key={item.label}
              className={`sidebar-item ${active === item.label ? "active" : ""}`}
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>

=======
      <button className="sidebar-toggle d-md-none" onClick={() => setOpen(!open)}>
        ☰ MENU
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>
        {items.map((item) => (
          <div
            key={item.label}
            className={`sidebar-item ${active === item.label ? "active" : ""}`}
            onClick={() => {
              onSelect(item);   // ✅ send full item object
              setOpen(false);
            }}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
      </div>
    </>
  );
}
