import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ETaxPage() {
  const pageKey = "tax";

  const sidebarItems = [
    { icon: "📝", label: "Income Tax" },
    { icon: "💵", label: "TDS / Challan" },
    { icon: "🏛", label: "Government Payments" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("taxActive") || "Income Tax"
  );

  useEffect(() => {
    document.title = "SBI - e-Tax";
    localStorage.setItem("lastPage", "tax");
    localStorage.setItem("taxActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />
      <div className="main-container">
        <Sidebar items={sidebarItems} active={activeItem} onSelect={setActiveItem} />
        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="e-Tax" currentItem={activeItem} />
          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p>Tax related content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
