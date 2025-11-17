<<<<<<< HEAD
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";


export default function EServices() {
  const navigate = useNavigate();
  const { section } = useParams();

  const pageKey = "services";

  // Sidebar items (memoized to avoid warnings)
  const sidebarItems = useMemo(
    () => [
      { label: "ATM Services", path: "atm" },
      { label: "Update Aadhaar", path: "aadhaar" },
      { label: "Cheque Services", path: "cheque" },
      { label: "Nominee Update", path: "nominee" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // 1. Redirect if no section is provided
    if (!section) {
      navigate("/tax/atm", { replace: true });
      return;
    }

    // 2. Sync active item with URL
    const found = sidebarItems.find((i) => i.path === section);

    if (found) {
      setActiveItem(found.label);
    } else {
      // 3. Invalid section → redirect to default
      navigate("/tax/atm", { replace: true });
    }

    document.title = "State Bank of India - Services";
  }, [section, sidebarItems, navigate]);

  return (
    <>
      <DashboardHeader />
      

      <div className="sbi-layout">
        <TopMenu active={pageKey} />

        <div className="main-container">
          {/* Sidebar */}
          <Sidebar
            items={sidebarItems}
            active={activeItem}
            onSelect={(item) => navigate(`/tax/${item.path}`)}
          />

          {/* Content */}
          <div className="content-area slide-fade">
            <Breadcrumbs currentPage="e-Services" currentItem={activeItem} />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {activeItem === "ATM Services" ? (
                <p className="text-muted">🔐 Manage your ATM card settings here.</p>
              ) : activeItem === "Update Aadhaar" ? (
                <p className="text-muted">🔄 Update your Aadhaar details securely.</p>
              ) : activeItem === "Cheque Services" ? (
                <p className="text-muted">🏦 Request or track cheque-related services.</p>
              ) : activeItem === "Nominee Update" ? (
                <p className="text-muted">📮 Update or add a nominee to your accounts.</p>
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
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
  );
}
