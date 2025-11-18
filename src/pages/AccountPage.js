import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
// import DashboardHeader from "./DashboardHeader";
import Menubar from "../components/Menubar";
import UserInfoBanner from "./UserInfoBanner";
import AccountStatement from "../components/AccountStatement"; // ⬅ ADD THIS
import "./AccountPage.css";

export default function AccountPage() {
  const navigate = useNavigate();
  const { section } = useParams();

  const sidebarItems =useMemo(()=>
    [
    { label: "Account Summary", path: "accountsummary.htm" },
    { label: "Account Statement", path: "retailaccountstatement.htm" },
    { label: "e-Statement", path: "retailestatement.htm" },
    { label: "Profile", path: "retailprofile.htm" },
    { label: "Know Your CIBIL Score", path: "retailcibil.htm" },
    { label: "Set Favourite Links", path: "favourites" },
  ],[]

  ) 
  const [activeItem, setActiveItem] = useState("");
  const [statementData, setStatementData] = useState([]);
  const [loading, setLoading] = useState(false);

  // ---------------------------
  // Detect active sidebar item
  // ---------------------------
  useEffect(() => {
    const item = sidebarItems.find((i) => i.path === section);
    if (item) setActiveItem(item.label);

    document.title = "State Bank of India - My Accounts";
  }, [section,sidebarItems]);

  // ---------------------------------------
  // FETCH API WHEN USER OPENS ACCOUNT STATEMENT
  // ---------------------------------------
  useEffect(() => {
    if (activeItem !== "Account Statement") return;

    setLoading(true);

    fetch("https://your-api.com/account-details") // <-- Your API endpoint
      .then((res) => res.json())
      .then((api) => {
        // Transform API → Table format
        const formatted = [
          { label: "Account Number", value: api?.accountNumber },
          { label: "Branch", value: api?.branch },

          {
            label: "Address",
            section: true,
            value: [
              api?.address?.line1,
              api?.address?.line2,
              `${api?.address?.city} - ${api?.address?.pincode}`,
            ],
          },

          { label: "Account Type", value: api?.accountType },
          { label: "Account Name", value: api?.accountHolder },
          { label: "Interest Rate (% p.a.)", value: api?.interestRate },
          { label: "Drawing Power", value: api?.drawingPower },
          { label: "MOD Balance", value: api?.modBalance },
        ];

        setStatementData(formatted);
      })
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, [activeItem]);

  return (
    <>
      <div>
        {/* <DashboardHeader /> */}
        <Menubar />
      </div>

      <div className="sbi-layout">
        <TopMenu active="accounts" />
        <UserInfoBanner />

        <div className="col-md-12 side-bar-content">
          <div className="col-md-2 quick-color">
            <h6 className="sidebar-title">Quick Links</h6>
          </div>

          <div className="col-md-10 breadcrum-style">
            <Breadcrumbs
              currentPage="My Accounts & Profile"
              currentItem={activeItem}
            />
          </div>
        </div>

        <div className="breadcrum-main-container">
          <Sidebar
            items={sidebarItems}
            active={activeItem}
            onSelect={(item) => navigate(`/accounts/${item.path}`)}
          />

          <div className="content-area slide-fade">
            <div className="card shadow-sm mt-3">
              <h6 className="mb-3 active-item">{activeItem}</h6>

              {/* ------------------------------
                   ACCOUNT STATEMENT VIEW
              ------------------------------ */}
              {activeItem === "Account Statement" ? (
                loading ? (
                  <p className="text-muted">Loading...</p>
                ) : (
                  <AccountStatement data={statementData} />
                )
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
