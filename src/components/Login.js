/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/no-access-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Navbar from "./Navbar";  
import Footer from "./Footer";

const Login = () => {
  const [loginShow, setLoginShow] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setLoginShow(true);
    
  };
 
 

  return (
    <div className="sbi-page">

      {!loginShow ? (
        <>
         <Header />
         <div className="row m-0" id="primary_navigation">
       <Navbar />
      </div>

          {/* ===== HERO SECTION ===== */}
          <div className="row" id="banner">
            <div className="col-comn col-lg-12 col-md-12 col-sm-12 hidden-xs position-relative">
              <img
                src="/images/personal_banner.jpg"
                alt="Personal Banking Banner"
                title="Personal Banking Banner"
                className="img-fluid w-100"
              />

              {/* ===== CONTINUE BUTTON SECTION ===== */}
              <div className="continue_btn d-flex align-items-center justify-content-center mt-3 flex-column">
                <a
                  href="#"
                  className="login_button d-flex align-items-center"
                  onClick={handleLoginClick}
                  aria-label="Continue to Login"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#125182",
                    padding: "10px 25px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  CONTINUE TO LOGIN
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="26"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill ms-3 align-top"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </a>

                <span
                  style={{
                    width: "250px",
                    display: "inline-block",
                    textAlign: "center",
                    color: "#0F5285",
                    fontWeight: "bold",
                    fontSize: "13px",
                    marginTop: "8px",
                  }}
                >
                  Dear Customer, OTP based login is introduced for added
                  security
                </span>
              </div>
            </div>
            <div class="">
             <div
  style={{
    position: "absolute",
    right: "10px",
    bottom: "10px",
  }}
>
  <ul id="footer_links" className="pull-right list-inline m-0">
    <li className="list-inline-item me-3">
      <a
        href="/sbijava/retail/html/RBI_Limited_Liability_Policy.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="RBI Limited Liability Policy"
        style={{ color: "#125182" }}
      >
        RBI Limited Liability Policy
      </a>
    </li>

    <li className="list-inline-item me-3">
      <a
        href="/sbijava/retail/html/Privacy_Statement.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Privacy Statement"
        style={{ color: "#125182" }}
      >
        Privacy Statement
      </a>
    </li>

    <li className="list-inline-item me-3">
      <a
        href="/sbijava/retail/html/hmpg_disclosure.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Disclosure"
        style={{ color: "#125182" }}
      >
        Disclosure
      </a>
    </li>

    <li className="list-inline-item">
      <a
        href="/sbijava/retail/html/Terms_of_Use.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Terms of Service (Terms & Conditions)"
        style={{ color: "#125182" }}
      >
        Terms of Service (Terms &amp; Conditions)
      </a>
    </li>
  </ul>

  <div className="clearfix"></div>
</div>

          </div>
            </div>
           
          
          {/* ===== TERMS SECTION ===== */}
          <div className="row m-0" id="terms_area">
            <div className="col-lg-12 col-md-12 col-sm-12 terms">
              <div className="col-lg-10 col-sm-9 col-xs-12">
                <p>
                  By clicking on "Continue to Login" button, you agree to the
                  Terms of Service (Terms &amp; Conditions) of usage of Internet
                  Banking of SBI.
                </p>
              </div>
            </div>
          </div>
                 
          {/* ===== SECURITY SECTION ===== */}
          <section className="security-section">
            <div className="row m-0" id="phishing_message">
              {/* 4 tips boxes */}
              <div className="col-lg-3 col-sm-6">
                <div className="phishing_box mb-3">
                  <span className="accept">&nbsp;</span>
                  <h3 className="always">ALWAYS</h3>
                  <p>
                    keep your computer <br /> free of malware
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="phishing_box mb-3">
                  <span className="accept">&nbsp;</span>
                  <h3 className="always">ALWAYS</h3>
                  <p>
                    change your passwords <br /> periodically
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="phishing_box">
                  <span className="reject">&nbsp;</span>
                  <h3 className="never">NEVER</h3>
                  <p>
                    respond to any communication <br /> seeking your passwords
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="phishing_box last_box">
                  <span className="reject">&nbsp;</span>
                  <h3 className="never">NEVER</h3>
                  <p>
                    reveal your passwords or <br /> card details to anyone
                  </p>
                </div>
              </div>
            </div>
          </section>
          
           <h2 className="own_head">FOR YOUR OWN SECURITY</h2> 
           
          <div className="row m-0" id="phishing_contents"> 
          <div className="col-lg-6 col-md-6 col-sm-6"> 
            <h3>Please ensure the following before logging into OnlineSBI</h3>
             <ul className="phishing_list"> 
              <li> <i className="bi bi-arrow-right text-primary me-2">
                </i>The URL in your browser address bar begins with "https".</li>
                 <li> <i className="bi bi-arrow-right text-primary me-2">
                  </i>The address or status bar displays the padlock symbol.</li>
                   <li><i className="bi bi-arrow-right text-primary me-2">
                    </i>Click the padlock to view and verify the security certificate.</li> 
                    {/* <li> <i className="bi bi-arrow-right text-primary me-2">
                    </i> The address bar turns green indicating that the site is secured with an SSL Certificate that meets the Extended Validation Standard. </li> */}
                     <li> <i className="bi bi-arrow-right text-primary me-2"></i> (SSL is compatible for IE 7.0 and above, Mozilla Firefox 3.1 and above, Opera 9.5 and above, Safari 3.5 and above, Google Chrome). </li>
                      </ul>
                      
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6"> 
                        <div className="phishing_contents reject_box">
                           <h3>Beware of Phishing attacks</h3> 
                           <ul className="phishing_list"> 
                            <li> 
                             <i className="bi bi-arrow-right text-primary me-2"></i> Phishing is a fraudulent attempt, usually made through email, phone calls, SMS etc seeking your personal and confidential information. </li> 
                             <li>
                             <i className="bi bi-arrow-right text-primary me-2"></i> State Bank or any of its representatives never sends you email/SMS or calls you over phone to get your personal information, password, or one-time SMS (high security) password. Any such email/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such communication. Please report immediately on{" "} report.phishing@sbi.co.in if you receive any such email/SMS or phone call. Lock your user access immediately if you have accidentally revealed your credentials. 
                             </li> 
                            </ul> 
                        </div>
                      </div>
            </div>
        {/* ===== FOOTER ===== */}
      <Footer />
        </>
      ) : (
        <LoginForm />
      )}

      
    </div>
  );
};

export default Login;
