import React, { useState } from "react";
import "./Sidebar.css";
export default function Sidebar({ items, active, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
    

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

      </div>
    </>
  );
}
