/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-access-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Menubar from "../components/Menubar";
import "./DashboardHeader.css"
function DashboardHeader() {
     
     return (
     <><header className="sbi-header">
             <div className="align-items-center main-header-top col-md-12">

                 {/* LEFT — LOGO (col 2) */}
                 <div className="col-md-6  align-items-center">
                     <img
                         src="https://retail.onlinesbi.sbi/sbijava/retail/images/sbi_logo.png"
                         alt="SBI Logo"
                         className="sbi-logo" />
                     <div className="sbi-onlinedashboard-text ms-1">ONLINE</div>
                 </div>

                 {/* CENTER — NAV LINKS (col 8) */}
                  <div id="header_navigation" className="col-md-5">
            <ul id="form" className="pull-right">
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
                  href="javascript:void(0);"
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
                 {/* RIGHT — LOGOUT (col 2) */}
                 <div className="col-md-1 justify-content-end align-items-center logout">
                     <img
                         src="/images/logout.png"
                         alt="Logout"
                         className="logout-icon" />
                     <div className="logout-online-text ms-1">LOGOUT</div>
                 </div>

             </div>
         </header><div>
                 <Menubar />
             </div></>

    );
}
export default DashboardHeader;