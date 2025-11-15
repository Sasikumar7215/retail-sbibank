import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function EServices() {
  const pageKey = "services";

  const sidebarItems = [
    { icon: "🔐", label: "ATM Services" },
    { icon: "🔄", label: "Update Aadhaar" },
    { icon: "🏦", label: "Cheque Services" },
    { icon: "📮", label: "Nominee Update" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("servicesActive") || "ATM Services"
  );

  useEffect(() => {
    document.title = "SBI - e-Services";
    localStorage.setItem("lastPage", "services");
    localStorage.setItem("servicesActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />
      <div className="main-container">
        <Sidebar items={sidebarItems} active={activeItem} onSelect={setActiveItem} />
        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="e-Services" currentItem={activeItem} />
          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p>e-Services content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
