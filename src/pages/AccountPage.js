import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardHeader from "./DashboardHeader";
import UserInfoBanner from "./UserInfoBanner";
import "./AccountPage.css";
// import Menubar from "../components/Menubar";

export default function AccountPage() {
  const navigate = useNavigate();
  const { section } = useParams();

  const sidebarItems = [
    {  label: "Account Summary", path: "accountsummary.htm" },
    {  label: "Account Statement", path: "retailaccountstatement.htm" },
    { label: "e-Statement", path: "retailestatement.htm" },
    { label: "Profile", path: "retailprofile.htm" },
    {  label: "Know Your CIBIL Score", path: "retailcibil.htm" },
    { label: "Set Favourite Links", path: "favourites" },
  ];

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const item = sidebarItems.find((i) => i.path === section);
    if (item) setActiveItem(item.label);

    document.title = "State Bank of India - My Accounts";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  return (
    <>
    <div>
      <DashboardHeader />
     
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

            {activeItem === "Account Statement" ? (
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Account Number</th>
                    <td>0000002219466282</td>
                  </tr>
                  <tr>
                    <th>Branch</th>
                    <td>GANTI PEDAPUDI</td>
                  </tr>
                  <tr>
                    <th>Account Type</th>
                    <td>LOTUS SAVING BANK – CHQ</td>
                  </tr>
                </tbody>
              </table>
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
