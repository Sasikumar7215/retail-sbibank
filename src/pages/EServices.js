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

  // Memoized sidebar items
  const sidebarItems = useMemo(
    () => [
      { label: "ATM Services", path: "atm" },
      { label: "Update Aadhaar", path: "aadhaar" },
      {label: "Cheque Services", path: "cheque" },
      {  label: "Nominee Update", path: "nominee" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  // Sync active item with URL
  useEffect(() => {
    const found = sidebarItems.find((i) => i.path === section);
    if (found) setActiveItem(found.label);

    document.title = "State Bank of India - Services";
  }, [section, sidebarItems]);

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
            onSelect={(item) => navigate(`/services/${item.path}`)}
          />

          {/* Content */}
          <div className="content-area slide-fade">
            <Breadcrumbs currentPage="e-Services" currentItem={activeItem} />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {/* Page-specific content examples */}
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
  );
}
