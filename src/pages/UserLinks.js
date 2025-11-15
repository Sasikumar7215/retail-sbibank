import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function UserLinks() {
  const pageKey = "links";

  const sidebarItems = [
    { icon: "🔗", label: "SBI Home Loan" },
    { icon: "📚", label: "Forms Download" },
    { icon: "🌍", label: "Government Portals" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("linksActive") || "SBI Home Loan"
  );

  useEffect(() => {
    document.title = "SBI - Useful Links";
    localStorage.setItem("lastPage", "links");
    localStorage.setItem("linksActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />
      <div className="main-container">
        <Sidebar items={sidebarItems} active={activeItem} onSelect={setActiveItem} />
        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="Useful Links" currentItem={activeItem} />
          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p>Useful links will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
