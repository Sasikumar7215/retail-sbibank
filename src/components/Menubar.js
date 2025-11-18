import React from "react";
// import "./SBIHeader.css";
// eslint-disable-next-line
import "./Menubar.css";

export default function Menubar() {
  const callURL = (url) => {
    window.location.href = url;
  };

  const openPopup = (url) => {
    window.open(url, "_blank", "width=780,height=500,scrollbars=1");
  };

  const newPopup = (url) => {
    window.open(url, "_blank", "width=900,height=700,scrollbars=1");
  };

  const openHomeLoan = () => {
    alert("SBI Home Loan clicked!");
  };

  return (
    <header id="headerContent" className="no-padding">
      {/* SBI Logo */}
      <div className="col-sm-1 col-xs-6 float-start px-3 mt-3">
     
                     <img
                         src="https://retail.onlinesbi.sbi/sbijava/retail/images/sbi_logo.png"
                         alt="SBI Logo"
                         className="sbi-logo" />
                     <div className="sbi-onlinedashboard-text ms-1">ONLINE</div>
                 </div>
      

      {/* Mobile Logout */}
      <div className="col-xs-6 py-1 px-2 float-end d-block d-sm-none">
        <a
         
          onClick={() => callURL("/retail/feedbackdisplay.htm")}
          className="wpanel_logout text-decoration-none"
          aria-label="Logout"
        >
          <span id="icon_logout" title="Logout"></span>
          <span className="logout_text">LOGOUT</span>
        </a>
      </div>

      <div className="col-sm-11 float-start px-3">
        <div className="float-end">
          <div id="header_navigation" className="float-start">
            {/* Top Links */}
           <ul id="header_toplinks" className="header-top-links">
  <li><a href="#">Skip to Main Content</a></li>

  <li>
    <a href="#" onClick={() => openPopup("/sbijava/retail/html/whts_new_sbi.html")}>
      What's New
    </a>
  </li>

  <li>
    <a href="#" onClick={() => openPopup("/sbijava/retail/html/aboutus.html")}>
      About OnlineSBI
    </a>
  </li>

  <li>
    <a>
      Registration Forms
    </a>
  </li>

  <li className="dropdown-item">
   
      <span>Hindi</span> <span>हिंदी</span>
    
  </li>
</ul>


            {/* 🔥 Header Icons Using SPRITE PNG */}
            <ul className="header-links-list">

              <li>
                <a
                  className=""
                  href="#"
                  // onClick={() => callURL("/retail/wabankinginitial.htm")}
               
                >
                    <img
                         src="/public/images/whatsapp-icon.png"
                         alt="SBI Logo"
                         className="" />
                </a>
              </li>

              <li>
                
                   <img
                         src="/images/loanHand_logo.png"
                         alt="SBI Logo"
                        className="" />
                
                     Loan offers
                
              </li>

              <li>
                  <img
                         src="https://retail.onlinesbi.sbi/sbijava/retail/images/sbi_logo.png"
                         alt="SBI Logo"
                         className="sbi-logo" />
                  FX-Retail
                
              </li>

              <li>
                <a
                  className="sprite icon-3"
                  href="#"
                  onClick={openHomeLoan}
                >
                  SBI Home Loan
                </a>
              </li>

              <li>
                <a
                  className="sprite icon-4"
                  href="#"
                  onClick={() => callURL("/retail/sbiExclusif.htm")}
                >
                  SBI Wealth
                </a>
              </li>

              <li>
                <a
                  className="sprite icon-5"
                  href="#"
                  onClick={() => newPopup("https://bank.sbi/portal/web/interest-rates/deposit-rates")}
                >
                  Interest Rates
                </a>
              </li>

              <li>
                <a
                  className="sprite icon-6"
                  href="#"
                  onClick={() => newPopup("/sbijava/retail/html/sbsecure_otp_app_faq.html")}
                >
                  Secure OTP
                </a>
              </li>

              <li>
                <a
                  className="sprite icon-7"
                  href="#"
                  onClick={() => callURL("/retail/posttickets.htm")}
                >
                  Customer Care
                </a>
             </li>
            </ul>
          </div>

          {/* Desktop Logout */}
          <a
            href="#"
            onClick={() => callURL("/retail/feedbackdisplay.htm")}
            className="wpanel_logout d-none d-sm-block"
          >
            <span id="icon_logout" title="Logout"></span>
            <span className="logout_text">LOGOUT</span>
          </a>
        </div>
      </div>
    </header>
  );
}
