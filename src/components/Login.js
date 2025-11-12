/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Login() {
  // helper function for popup windows
  const openPopup = (url, name, width, height) => {
    window.open(
      url,
      name,
      `width=${width},height=${height},status=1,scrollbars=1,location=0`
    );
  };

  return (
    <>
      <div id="shadow">
        <div id="wrapper" className="container-fluid">
          {/* ===== HEADER SECTION ===== */}
          <header id="headerContent">
            <div className="row m-0" id="header">
              {/* Logo */}
              <div className="col-lg-3 col-md-2 col-sm-2 xs-padding">
                <a
                  href="https://sbi.bank.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="logo"
                  aria-label="SBI Logo"
                ></a>
              </div>

              {/* Right: Top Links */}
              <div className="col-lg-9 col-md-10 col-sm-10">
                <div id="header_core_info">
                  <div className="pull-right">
                    <div id="header_navigation">
                      <ul id="forms" className="pull-right list-unstyled d-flex gap-3 mb-0">
                        <li id="homeLoanButton">
                          <a
                            href="https://homeloans.sbi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="SBI Home Loan"
                          >
                            <img
                              src="https://retail.onlinesbi.sbi/sbijava/retail/images/HomeLoanButton.png"
                              alt="SBI Home Loan"
                            />
                          </a>
                        </li>

                        <li>
                          <a
                            href="/sbijava/retail/html/aboutus.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            About OnlineSBI
                          </a>
                        </li>

                        <li>
                          <a
                            href="/npersonal/reg_forms.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Forms
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            onClick={() =>
                              openPopup(
                                "/npersonal/branch_locator.html",
                                "branches",
                                780,
                                500
                              )
                            }
                          >
                            Net Banking Branches
                          </a>
                        </li>

                        {/* Language Dropdown */}
                        <li>
                          <div className="dropdown language_selection_btn">
                            <button
                              id="dLabel"
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Language <span className="caret"></span>
                            </button>
                            <ul
                              className="dropdown-menu language_selection"
                              aria-labelledby="dLabel"
                            >
                              <li>
                                <a
                                  href="login.htm?languagecode=en"
                                  className="dropdown-item"
                                >
                                  English
                                </a>
                              </li>
                              <li>
                                <a
                                  href="login.htm?languagecode=hi_IN"
                                  className="dropdown-item d-flex justify-content-between"
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
                </div>
              </div>
            </div>
          </header>

          {/* ===== PRIMARY NAVIGATION ===== */}
          <div className="row m-0" id="primary_navigation">
            <nav
              role="navigation"
              className="navbar navbar-expand-md navbar-dark p-0"
              id="navContent"
            >
              {/* Mobile Toggle */}
              <button
                id="ChangeToggle"
                type="button"
                className="navbar-toggler mx-2"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Main navigation"
              >
                <i className="fa fa-bars" style={{ color: "#fff", fontSize: "28px" }}></i>
              </button>

              {/* Navbar Links */}
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto mb-0" id="navigation">
                  <li className="nav-item active_menu">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      onClick={() =>
                        openPopup(
                          "/npersonal/productandservices.html",
                          "productservice",
                          780,
                          500
                        )
                      }
                      className="nav-link"
                    >
                      Products & Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/npersonal/rinb_videos.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      How Do I (Help)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.sihub.in/managesi/sbi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      Manage Debit Card E-Mandate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://retail.sbi.bank.in/npersonal/contact_us.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
