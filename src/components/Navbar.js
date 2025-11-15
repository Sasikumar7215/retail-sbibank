/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
function Navbar() {
    const handleProductsClick = (e) => {
    e.preventDefault();
    window.open(    
        "/npersonal/productandservices.html",
        "productservice",
        "width=780,height=500,status=1,scrollbars=1,location=0"
    );
  }
    return (
         <nav
          role="navigation"
          className="navbar navbar-expand-md navbar-default p-0 navbar-dark"
          id="navContent"
        >
          <button
            id="ChangeToggle"
            type="button"
            data-bs-target="#navbarCollapse"
            data-bs-toggle="collapse"
            className="navbar-toggler navbar-btn"
            aria-label="Main navigation"
          >
            <i
              className="fa fa-bars"
              style={{ color: "#fff", fontSize: "28px" }}
            ></i>
          </button>

          <div className="arrow_icon pull-right d-md-none">
            <a href="#" className="arrow arrow_up" aria-label="arrow">
              &nbsp;
            </a>
          </div>

          <div
            id="navbarCollapse"
            className="collapse navbar-collapse nav-comn"
          >
            <ul className="nav navbar-nav" id="navigation">
              <li className="active_menu">
                <a href="/" aria-label="Home">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={handleProductsClick}
                  aria-label="Products & Services"
                >
                  Products &amp; Services
                </a>
              </li>

              <li>
                <a
                  href="/npersonal/rinb_videos.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="How Do I (Help)"
                >
                  How Do I (Help)
                </a>
              </li>

              <li>
                <a
                  href="https://www.sihub.in/managesi/sbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manage Debit Card E-Mandate"
                >
                  Manage Debit Card E-Mandate
                </a>
              </li>

              <li>
                <a
                  href="https://retail.sbi.bank.in/npersonal/contact_us.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
    );
}

export default Navbar;