import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";


export default function BillsPage() {
  const navigate = useNavigate();
  const { section } = useParams();

  // Memoize sidebar items to prevent re-creation each render
  const sidebarItems = useMemo(
    () => [
      {label: "Electricity Bills", path: "electricity" },
      { label: "Mobile Postpaid", path: "mobile" },
      {  label: "Broadband / WiFi", path: "broadband" },
      {  label: "Water Bills", path: "water" },
      {  label: "Property Tax", path: "propertytax" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  // Sync active item from URL
  useEffect(() => {
    const found = sidebarItems.find((item) => item.path === section);
    if (found) setActiveItem(found.label);

    document.title = "SBI - Bill Payments";
  }, [section, sidebarItems]);

  return (
    <>
      <DashboardHeader />

      <div className="sbi-layout">
        <TopMenu active="bills" />

        <div className="main-container">
          <Sidebar
            items={sidebarItems}
            active={activeItem}
            onSelect={(item) => navigate(`/bills/${item.path}`)}
          />

          <div className="content-area slide-fade">
            <Breadcrumbs currentPage="Bill Payments" currentItem={activeItem} />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {activeItem === "Electricity Bills" ? (
                <p className="text-muted fs-6">
                  ⚡ Pay your electricity bills quickly and securely.
                </p>
              ) : (
                <p className="text-muted fs-6">
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
