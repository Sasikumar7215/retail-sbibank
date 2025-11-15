/* eslint-disable jsx-a11y/no-access-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./AccountStatement.css";
import Menubar from "./Menubar";
function AccountStatement(){
    useEffect(() => {
    document.title = "State Bank of India - My Account";
  }, []);
  const [activeMenu, setActiveMenu] = React.useState("accounts"); // default tab
const [activeSub, setActiveSub] = React.useState("Account Statement"); // default sidebar
  const menuData = [
  {
    key: "accounts",
    label: "My Accounts & Profile",
    sidebar: [
      "Account Summary",
      "Account Statement",
      "e-Statement",
      "Profile",
      "Know Your CIBIL Score",
      "Set Favourite Links",
    ],
    content: "Account related information will appear here.",
  },
  {
    key: "payments",
    label: "Payments / Transfers",
    sidebar: ["IMPS", "NEFT", "RTGS", "Quick Transfer"],
    content: "Payments & fund transfer content.",
  },
  {
    key: "bills",
    label: "Bill Payments",
    sidebar: ["Electricity", "Water", "Broadband", "DTH"],
    content: "Bill payment services.",
  },
  {
    key: "deposit",
    label: "Deposit & Investment",
    sidebar: ["Fixed Deposit", "Recurring Deposit", "Investments"],
    content: "Deposit & investment-related services.",
  },
  {
    key: "tax",
    label: "e-Tax",
    sidebar: ["Tax Payment", "Challan Status"],
    content: "e-Tax services.",
  },
  {
    key: "services",
    label: "e-Services",
    sidebar: ["Aadhaar Update", "Email Update", "ATM Card Services"],
    content: "General e-services.",
  },
  {
    key: "requests",
    label: "Requests & Enquiries",
    sidebar: ["Raise Request", "Track Requests"],
    content: "Requests and enquiries.",
  },
  {
    key: "links",
    label: "Useful Links",
    sidebar: ["FAQ", "Support", "Help Desk"],
    content: "Useful banking links.",
  },
];

    return(
        <>
         <header className="sbi-header">
        <div className="header-top">
          <div className="logo">
            <img
              src="https://retail.onlinesbi.sbi/sbijava/retail/images/sbi_logo.png"
              alt="SBI Logo"
            />
            <div className="sbi-online-text">ONLINE</div>
          </div>

          <div id="header_navigation">
            <ul id="forms" className="pull-right">
              <li id="homeLoanButton">
                <a
                  href="https://homeloans.sbi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  accessKey="3"
                  title="SBI Home Loan"
                  aria-label="SBI Home Loan"
                >
                  <img
                    src="/images/HomeLoanButton.png"
                    alt="SBI Home Loan"
                    title="SBI Home Loan"
                  />
                </a>
              </li>

              <li className="about">
                <a
                  href="/sbijava/retail/html/aboutus.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  accessKey="3"
                  title="About OnlineSBI"
                  aria-label="About OnlineSBI"
                >
                  About OnlineSBI
                </a>
              </li>

              <li>
                <a
                  href="/npersonal/reg_forms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Forms"
                  aria-label="Forms"
                >
                  Forms
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="last"
                  onClick={() => alert('Popup Function Not Implemented')}
                  aria-label="Net Banking Branches"
                >
                  Net Banking Branches
                </a>
              </li>

              <li>
                <div className="dropdown language_selection_btn">
                  <button
                    id="dLabel"
                    className="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Language <span className="caret"></span>
                  </button>
                  <ul
                    className="dropdown-menu language_selection"
                    aria-labelledby="dLabel"
                  >
                    <li className="dropdown-item">
                      <a
                        href="login.htm?languagecode=en"
                        aria-label="English Language"
                      >
                        <span>English</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a
                        href="login.htm?languagecode=hi_IN"
                        aria-label="Hindi Language"
                      >
                        <span>Hindi</span> <span>हिंदी</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Menubar />
      <div className="bg-primary text-white py-2">
  <div className="container-fluid d-flex flex-wrap justify-content-around text-center fw-semibold">
    {menuData.map((item) => (
      <div
        key={item.key}
        className="p-2"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setActiveMenu(item.key);
          setActiveSub(null);
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/9815/9815472.png"
          className="mb-1"
          style={{ width: "45px" }}
          alt=""
        />
        <div className={activeMenu === item.key ? "fw-bold text-warning" : ""}>
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>
<div className="container-fluid mt-3 side-content">
  <div className="row">

    {/* LEFT SIDEBAR */}
    <div className="col-md-3 col-lg-2 bg-white border-end shadow-sm">
      <div className="p-3">
        <h6 className="fw-bold text-primary">{menuData.find(m => m.key === activeMenu).label}</h6>
        <ul className="list-group list-group-flush">
          {menuData
            .find((m) => m.key === activeMenu)
            .sidebar.map((sub) => (
              <li
                key={sub}
                className={`list-group-item ${
                  activeSub === sub ? "active" : "text-dark"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveSub(sub)}
              >
                {sub}
              </li>
            ))}
        </ul>
      </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="col-md-9 col-lg-10 p-4">
      <div className="alert alert-light border text-secondary small mb-3">
        You are here: <strong>{menuData.find(m => m.key === activeMenu).label} &gt; {activeSub}</strong>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white fw-bold">{activeSub}</div>

        <div className="card-body">

          {/* CUSTOM CONTENT LOGIC */}
          {activeSub === "Account Statement" ? (
            <>
              {/* Your existing account statement table */}
              <table className="table table-bordered">
                <tbody>
                  <tr><th>Account Number</th><td>0000002219466282</td></tr>
                  <tr><th>Branch</th><td>GANTI PEDAPUDI</td></tr>
                  <tr><th>Address</th><td>5-50 KOTHAPETA MANDALAM, GANTI POST</td></tr>
                  <tr><th>Type</th><td>LOTUS SAVING BANK – CHQ</td></tr>
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-muted">{menuData.find(m => m.key === activeMenu).content}</p>
          )}

        </div>
      </div>

    </div>
  </div>
</div>

        </>
    )
}
export default AccountStatement;