import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function DepositPage() {
  const pageKey = "deposit";

  const sidebarItems = [
    { icon: "🏦", label: "Fixed Deposit" },
    { icon: "💰", label: "Recurring Deposit" },
    { icon: "📈", label: "FD Interest Calculator" },
    { icon: "♻", label: "Renew FD" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("depositActive") || "Fixed Deposit"
  );

  useEffect(() => {
    document.title = "SBI - Deposit & Investment";
    localStorage.setItem("lastPage", "deposit");
    localStorage.setItem("depositActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />

      <div className="main-container">
        <Sidebar items={sidebarItems} active={activeItem} onSelect={setActiveItem} />

        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="Deposit & Investment" currentItem={activeItem} />
          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p>Deposit related content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
