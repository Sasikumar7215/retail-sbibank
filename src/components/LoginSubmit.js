import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSubmit.css";
import AccountPage from "../pages/AccountPage";
// import CryptoJS from "crypto-js";

export default function LoginSubmit() {
  const [otp, setOtp] = useState("");
  const navigate=useNavigate();
  // Disable right click (same behavior as raw HTML)
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
      alert("This function is not allowed here.");
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter OTP password");
      return;
    }else{
        navigate("/accounts")
    }

    // const key = "YkOxfEVtehggXHGoLI3Umu09p5NXPcB+NAT1nrPZLqw=";
    // // const encrypted = CryptoJS.AES.encrypt(otp, key).toString();

    // console.log("Encrypted OTP:", encrypted);
    // alert("OTP Submitted");

    // setOtp("");
  };

  const resendOtp = () => {
    alert("OTP Resent!");
  };

  return (
    <div id="wrapper" className="container">

      {/* HEADER */}
      <div className="row" id="header_">
        <header id="headerContent">
          <div className="d-flex">
            <div className="col-2 col-md-1">
              <a href="#" id="sbi_logo" aria-label="SBI"></a>
            </div>

            <div className="col-10 col-md-11">
              <div className="float-end">
                <div id="header_navigation">
                  <ul id="header_toplinks">
                    <li><a href="#" target="_blank">About OnlineSBI</a></li>
                    <li><a href="#" target="_blank">Registration Forms</a></li>
                  </ul>

                  <ul id="header_links">
                    <li><a href="#" target="_blank">Products & Services</a></li>
                    <li><a href="#" target="_blank">How do I (Help)</a></li>
                  </ul>
                </div>

                <a href="#" className="wpanel_logout hidden-xs">
                  <span id="icon_logout"></span>
                  <span className="logout_text">LOGOUT</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* USER PANEL */}
      <div className="row">
        <div className="px-0" id="navContent">
          <div id="wpanel_users">
            <div className="d-flex">
              <div className="col-sm-2 wpanel_time px-3">
                <span>18-Nov-2025 [12:05 PM IST]</span>
              </div>

              <div className="col-sm-7"></div>

              <div className="col-sm-3 px-3" id="wpanel_userdetails">
                <div className="col-sm-12">
                  <div id="wpanel_username">
                    <h2>Welcome</h2>
                    <h3>BHARATH KUMAR REDDY ARAMATI</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP FORM */}
      <div className="row" id="faq_content">
        <form className="px-0" onSubmit={handleSubmit}>
          <div className="content_heading">
            <h3>Login Second Factor Authentication</h3>
          </div>

          <div className="content_area">

            <p className="content_title">
              Enter the One Time Password sent to your mobile phone
            </p>

            <p className="mandatory_txt">Mandatory fields are marked with *</p>

            <div className="form-group d-md-flex">
              <label className="control-label col-md-3">
                One Time Password<span className="mandatory_txt">*</span>
              </label>

              <div className="col-md-3">
                <input
                  className="form-control"
                  type="password"
                  value={otp}
                  maxLength="6"
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value))
                      setOtp(e.target.value);
                  }}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="text-center col-md-9">
              <button type="submit"  className="btn btn-default">Submit</button>
            </div>

            <div className="common_btn col-lg-12 col-md-12">
              <p>
                If you did not receive the OTP,
                <button
                  type="button"
                  className="btn btn-resend"
                  onClick={resendOtp}
                >
                  Click here to resend
                </button>
              </p>
            </div>

          </div>

          <div className="info_panel col-md-12">
            <ul>
              <li>All communication will be sent to your registered mobile number.</li>
              <li>Never share your password or OTP with anyone.</li>
            </ul>
          </div>
        </form>
      </div>

      {/* FOOTER */}
      <footer id="footerContent">
        <div id="footer_area">
          <ul id="footer_links" className="float-end">
            <li><a href="#">Privacy Statement</a></li>
            <li><a href="#">Disclosure</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footbg" id="best_view">
          <div className="col-sm-4">
            <p>© State Bank of India</p>
          </div>
          <div className="col-sm-8">
            <p>Best viewed at 1024 × 768 resolution</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
