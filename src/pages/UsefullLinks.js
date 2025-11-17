import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";


export default function UsefullLinks() {
  const navigate = useNavigate();
  const { section } = useParams();

  const pageKey = "links";

  // Memoized sidebar items
  const sidebarItems = useMemo(
    () => [
      { label: "SBI Home Loan", path: "homeloan" },
      { label: "Forms Download", path: "forms" },
      { label: "Government Portals", path: "govportals" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // 1. Redirect if no section given
    if (!section) {
      navigate("/links/homeloan", { replace: true });
      return;
    }

    // 2. Sync active sidebar based on URL
    const found = sidebarItems.find((i) => i.path === section);

    if (found) {
      setActiveItem(found.label);
    } else {
      // 3. If section invalid → redirect
      navigate("/links/homeloan", { replace: true });
    }

    document.title = "State Bank of India - UsefullLinks";
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
            onSelect={(item) => navigate(`/links/${item.path}`)}
          />

          {/* Content */}
          <div className="content-area slide-fade">
            <Breadcrumbs currentPage="Useful Links" currentItem={activeItem} />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {/* Example page content */}
              {activeItem === "SBI Home Loan" ? (
                <p className="text-muted">🔗 Explore SBI Home Loan features & eligibility.</p>
              ) : activeItem === "Forms Download" ? (
                <p className="text-muted">📚 Download important SBI forms for various services.</p>
              ) : activeItem === "Government Portals" ? (
                <p className="text-muted">🌍 Access official Indian government online services.</p>
              ) : (
                <p className="text-muted">
                  Useful links for <strong>{activeItem}</strong> will appear here.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
