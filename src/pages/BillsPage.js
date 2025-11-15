import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
// import "../global.css";

export default function BillsPage() {
  const pageKey = "bills";

  const sidebarItems = [
    { icon: "💡", label: "Electricity Bills" },
    { icon: "📱", label: "Mobile Postpaid" },
    { icon: "🌐", label: "Broadband / WiFi" },
    { icon: "💧", label: "Water Bills" },
    { icon: "🏠", label: "Property Tax" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("billsActive") || "Electricity Bills"
  );

  useEffect(() => {
    document.title = "SBI - Bill Payments";
    localStorage.setItem("lastPage", "bills");
    localStorage.setItem("billsActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />

      <div className="main-container">
        <Sidebar items={sidebarItems} active={activeItem} onSelect={setActiveItem} />

        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="Bill Payments" currentItem={activeItem} />

          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p className="text-muted fs-6">
              Content for <strong>{activeItem}</strong> will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
