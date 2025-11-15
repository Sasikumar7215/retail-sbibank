import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AccountPage() {
  const navigate = useNavigate();
  const { section } = useParams();

  const sidebarItems = [
    { icon: "📄", label: "Account Summary", path: "accountsummary.htm" },
    { icon: "📊", label: "Account Statement", path: "retailaccountstatement.htm" },
    { icon: "🧾", label: "e-Statement", path: "retailestatement.htm" },
    { icon: "👤", label: "Profile", path: "retailprofile.htm" },
    { icon: "⭐", label: "Know Your CIBIL Score", path: "retailcibil.htm" },
    { icon: "❤️", label: "Set Favourite Links", path: "favourites" },
  ];

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const item = sidebarItems.find((i) => i.path === section);
    if (item) setActiveItem(item.label);

    document.title = "State Bank of India - My Accounts";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  return (
    <div className="sbi-layout">
      <TopMenu active="accounts" />

      <div className="main-container">
        <Sidebar
          items={sidebarItems}
          active={activeItem}
          onSelect={(item) => navigate(`/accounts/${item.path}`)}
        />

        <div className="content-area slide-fade">
          <Breadcrumbs
            currentPage="My Accounts & Profile"
            currentItem={activeItem}
          />

          <div className="card shadow-sm p-4 mt-3">
            <h4 className="mb-3">{activeItem}</h4>

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
  );
}
