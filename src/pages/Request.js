import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";
import Menubar from "../components/Menubar";

export default function Request() {
  const navigate = useNavigate();
  const { section } = useParams();

  const pageKey = "requests";

  // Memoized sidebar items
  const sidebarItems = useMemo(
    () => [
      { icon: "📮", label: "Cheque Book Request", path: "chequebook" },
      { icon: "📑", label: "Account Enquiry", path: "accountenquiry" },
      { icon: "📬", label: "Service Request", path: "servicerequest" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // 1. Redirect if no section provided
    if (!section) {
      navigate("/requests/chequebook", { replace: true });
      return;
    }

    // 2. Find matching sidebar item
    const found = sidebarItems.find((i) => i.path === section);

    if (found) {
      setActiveItem(found.label);
    } else {
      // 3. Invalid URL -> redirect to default
      navigate("/requests/chequebook", { replace: true });
    }

    document.title = "State Bank of India - Requests & Enquiries";
  }, [section, sidebarItems, navigate]);

  return (
    <>
      <DashboardHeader />
      <Menubar />

      <div className="sbi-layout">
        <TopMenu active={pageKey} />

        <div className="main-container">

          {/* Sidebar */}
          <Sidebar
            items={sidebarItems}
            active={activeItem}
            onSelect={(item) => navigate(`/requests/${item.path}`)}
          />

          {/* Content area */}
          <div className="content-area slide-fade">
            <Breadcrumbs
              currentPage="Requests & Enquiries"
              currentItem={activeItem}
            />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {/* Example dynamic content */}
              {activeItem === "Cheque Book Request" ? (
                <p className="text-muted">📮 Request a new cheque book easily.</p>
              ) : activeItem === "Account Enquiry" ? (
                <p className="text-muted">📑 View details or raise queries on your account.</p>
              ) : activeItem === "Service Request" ? (
                <p className="text-muted">📬 Submit various service-related requests.</p>
              ) : (
                <p className="text-muted">
                  Content for <strong>{activeItem}</strong> will be displayed here.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
