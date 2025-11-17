<<<<<<< HEAD
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";


export default function DepositPage() {
  const navigate = useNavigate();
  const { section } = useParams();

  // Memoized sidebar items (no warnings)
  const sidebarItems = useMemo(
    () => [
      {  label: "Fixed Deposit", path: "fixed" },
      {  label: "Recurring Deposit", path: "recurring" },
      { label: "FD Interest Calculator", path: "calculator" },
      { label: "Renew FD", path: "renew" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  // Update active tab based on URL
  useEffect(() => {
    const found = sidebarItems.find((i) => i.path === section);
    if (found) setActiveItem(found.label);

    document.title = "State Bank of India - Deposit & Investment";
  }, [section, sidebarItems]);

  return (
    <>
      <DashboardHeader />
     

      <div className="sbi-layout">
        <TopMenu active="deposit" />

        <div className="main-container">

          {/* Sidebar */}
          <Sidebar
            items={sidebarItems}
            active={activeItem}
            onSelect={(item) => navigate(`/deposit/${item.path}`)}
          />

          {/* Content Area */}
          <div className="content-area slide-fade">
            <Breadcrumbs
              currentPage="Deposit & Investment"
              currentItem={activeItem}
            />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {/* Special content examples */}
              {activeItem === "FD Interest Calculator" ? (
                <p className="text-muted">
                  📈 Use this tool to calculate your FD maturity amount.
                </p>
              ) : activeItem === "Renew FD" ? (
                <p className="text-muted">
                  ♻ Select an FD account to renew online.
                </p>
              ) : (
                <p className="text-muted">
                  Content for <strong>{activeItem}</strong> will appear here.
                </p>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
=======
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
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
  );
}
