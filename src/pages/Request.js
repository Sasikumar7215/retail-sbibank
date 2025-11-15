import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Request() {
  const pageKey = "requests";

  const sidebarItems = [
    { icon: "📮", label: "Cheque Book Request" },
    { icon: "📑", label: "Account Enquiry" },
    { icon: "📬", label: "Service Request" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("requestsActive") || "Cheque Book Request"
  );

  useEffect(() => {
    document.title = "SBI - Requests & Enquiries";
    localStorage.setItem("lastPage", "requests");
    localStorage.setItem("requestsActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />
      <div className="main-container">
        <Sidebar items={sidebarItems} active={activeItem} onSelect={setActiveItem} />
        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="Requests & Enquiries" currentItem={activeItem} />
          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p>Requests & enquiries details appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
