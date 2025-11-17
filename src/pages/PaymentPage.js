import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";


export default function PaymentPage() {
  const navigate = useNavigate();
  const { section } = useParams();

  const pageKey = "payments";

  // Memoized sidebar items (avoid re-creation warnings)
  const sidebarItems = useMemo(
    () => [
      { label: "Funds Transfer", path: "funds" },
      {  label: "Transfer to Other Bank", path: "otherbank" },
      { label: "Quick Transfer", path: "quick" },
      {  label: "Credit Card Payment", path: "creditcard" },
      {  label: "Gift Card / e-Voucher", path: "giftcard" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // 1. Redirect if no section present
    if (!section) {
      navigate("/payments/funds", { replace: true });
      return;
    }

    // 2. Match sidebar item with the URL
    const found = sidebarItems.find((i) => i.path === section);

    if (found) {
      setActiveItem(found.label);
    } else {
      // 3. Invalid URL -> redirect to default
      navigate("/payments/funds", { replace: true });
    }

    document.title = "State Bank of India - Payments / Transfers";
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
            onSelect={(item) => navigate(`/payments/${item.path}`)}
          />

          {/* Main Content */}
          <div className="content-area slide-fade">
            <Breadcrumbs
              currentPage="Payments / Transfers"
              currentItem={activeItem}
            />

            <div className="card shadow-sm p-4 mt-3">
              <h4>{activeItem}</h4>

              {/* Example dynamic content */}
              {activeItem === "Funds Transfer" ? (
                <p className="text-muted">💸 Transfer funds between your SBI accounts.</p>
              ) : activeItem === "Transfer to Other Bank" ? (
                <p className="text-muted">🏦 Send money to accounts in other banks via NEFT/RTGS.</p>
              ) : activeItem === "Quick Transfer" ? (
                <p className="text-muted">🔁 Transfer instantly without adding a beneficiary.</p>
              ) : activeItem === "Credit Card Payment" ? (
                <p className="text-muted">💳 Pay SBI or other bank credit card bills securely.</p>
              ) : activeItem === "Gift Card / e-Voucher" ? (
                <p className="text-muted">🎁 Manage and purchase SBI gift cards & vouchers.</p>
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
