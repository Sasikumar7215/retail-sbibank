import React, { useState } from "react";

export default function Sidebar({ items, active, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
      </div>
    </>
  );
}
