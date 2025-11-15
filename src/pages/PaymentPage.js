import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
// import "../global.css";

export default function PaymentPage() {
  const pageKey = "payments";

  const sidebarItems = [
    { icon: "💸", label: "Funds Transfer" },
    { icon: "🏦", label: "Transfer to Other Bank" },
    { icon: "🔁", label: "Quick Transfer" },
    { icon: "💳", label: "Credit Card Payment" },
    { icon: "🎁", label: "Gift Card / e-Voucher" },
  ];

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("paymentsActive") || "Funds Transfer"
  );

  useEffect(() => {
    document.title = "SBI - Payments / Transfers";
    localStorage.setItem("lastPage", "payments");
    localStorage.setItem("paymentsActive", activeItem);
  }, [activeItem]);

  return (
    <div className="sbi-layout">
      <TopMenu active={pageKey} />

      <div className="main-container">
        <Sidebar
          items={sidebarItems}
          active={activeItem}
          onSelect={setActiveItem}
        />

        <div className="content-area slide-fade">
          <Breadcrumbs currentPage="Payments / Transfers" currentItem={activeItem} />

          <div className="card shadow-sm p-4 mt-3">
            <h4>{activeItem}</h4>
            <p className="text-muted fs-6">
              Content for <strong>{activeItem}</strong> will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
