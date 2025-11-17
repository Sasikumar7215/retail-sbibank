/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
 import "./LoginForm.css"; 
import { useNavigate } from "react-router-dom";
 import Header from "./Header";
  import Navbar from "./Navbar";
  import Footer from "./Footer";
//  import Login from "./Login";

const LoginForm = () => {
 const navigate=useNavigate();
  const handleLoginClick = () => {
    
<<<<<<< HEAD
     navigate("/accounts");
=======
     navigate("/dashboard");
>>>>>>> 631e2c74a77ad7e9b0266f7e37e07ab77c1bde33
  };
  return (
    <>
  
  {/* {!AccountStatementShow ? ( */}
    <>
      <Header />
       <div className="row m-0" id="primary_navigation">
             <Navbar />
       </div>
     
   <form 
  name="quickLookForm" 
  method="post" 
  autoComplete="off"
  onSubmit={(e) => e.preventDefault()}
>
      <div id="login_block" style={{}}>

        <div className="row m-0">
          {/* Hidden fields */}
          <input type="hidden" name="hdnKioskID" value="" />
          <input type="hidden" name="hdnKModeUserName" value="" />
          <input type="hidden" name="errorCode" value="" />
          <input type="hidden" name="isGoogleCaptchaReq" value="" />
          <input type="hidden" name="userType" value="" />
          <input type="hidden" name="lockCount" value="" />
          <input type="hidden" name="captchaDisplayCount" value="" />
          <input type="hidden" name="unknownUserlockCount" value="" />
          <input type="hidden" name="bankCode" value="0" />
          <input
            type="hidden"
            name="browserName"
            id="browserName"
            value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
          />
          <input type="hidden" name="shapassword" value="" />
          <input type="hidden" name="language" value="english" />
          <input type="hidden" name="isLoginCaptchaReq" value="YES" />

          {/* Login Heading */}
          <div className="login_heading login_tickermsg">
            <div className="d-md-flex">
              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                <h3>Login to OnlineSBI</h3>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-5 col-xs-12">
                <div
                  id="wpanel_vticker"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    height: "30px",
                  }}
                >
                  <ul
                    style={{
                      position: "absolute",
                      margin: 0,
                      padding: 0,
                      top: "-1.91725px",
                    }}
                  >
                    <li style={{ margin: 0, padding: 0, opacity: 0.93923 }}>
                      To clear cache, please refresh this page by pressing Ctrl
                      + F5
                    </li>
                    <li style={{ margin: 0, padding: 0, opacity: 0.718961 }}>
                      Dear Customer, Mandatory login and profile password change
                      introduced for added security.
                    </li>
                    <li style={{ margin: 0, padding: 0 }}>
                      To clear cache, please refresh this page by pressing Ctrl
                      + F5
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 hidden-xs">
                <span className="welcome_text">
                  Welcome to Personal Internet Banking
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="err_mssg_fe"></div>

        {/* Login Fields */}
        <div id="login_fields">
          <div className="row m-0 d-sm-flex">
            <div className="col-lg-6 col-md-6 col-sm-12 user_details">
              <p>
                (<span>CARE: </span> Username and password are case sensitive.)
              </p>

              <div className="row m-0">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="username">Username*</label>
                    <input
                      name="userName"
                      type="text"
                      className="form-control"
                      id="username"
                      size="30"
                      maxLength="30"
                      autoComplete="off"
                      aria-label="userName"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="label2">Password*</label>
                    <input
                      aria-label="password field"
                      name="password0"
                      type="password"
                      value="Dummy@123"
                      autoComplete="off"
                      style={{ display: "none" }}
                    />
                    <input
                      name="password"
                      type="password"
                      autoComplete="off"
                      className="form-control"
                      id="label2"
                      title="password"
                      size="30"
                      aria-label="confirm password"
                    />
                    <input
                      aria-label="password field"
                      name="password1"
                      type="password"
                      value="Dummy@123"
                      autoComplete="off"
                      style={{ display: "none" }}
                    />
                  </div>

                  {/* Captcha Section */}
                  <div className="form-group">
                    <div
                      className="form-group"
                      id="noAudImgSelection"
                      style={{ display: "none" }}
                    >
                      <label htmlFor="captcha">
                        Captcha <span className="mandatory_txt">*</span>
                      </label>
                    </div>
                    <div
                      className="form-group"
                      id="imgselection"
                      style={{ display: "block" }}
                    >
                      <label htmlFor="captcha">
                        Enter the text as shown in the image{" "}
                        <span className="mandatory_txt">*</span>
                      </label>
                    </div>

                    <input
                      name="loginCaptchaValue"
                      className="form-control"
                      id="loginCaptchaValue"
                      type="text"
                      autoComplete="off"
                      aria-label="Enter The Captcha"
                    />

                    <div className="form-group" id="captchaOptionDisplay">
                      <div className="row m-0">
                        <label
                          htmlFor="captchaOptions"
                          aria-label="Select one of the Captcha options"
                        >
                          Select one of the Captcha options *
                        </label>
                        <label className="col-md-6 col-sm-12 col-xs-6">
                          <input
                            name="optionOfCaptcha"
                            type="radio"
                            defaultChecked
                            id="capOption"
                            value="IMG"
                            aria-label="Image Captcha"
                          />
                          <span style={{ paddingLeft: "3px" }}>
                            Image Captcha
                          </span>
                        </label>
                        <label className="col-md-6 col-sm-12 col-xs-6">
                          <input
                            name="optionOfCaptcha"
                            type="radio"
                            id="capOption"
                            value="AUD"
                            aria-label="Audio Captcha"
                          />
                          <span style={{ paddingLeft: "3px" }}>
                            Audio Captcha
                          </span>
                        </label>
                      </div>
                    </div>

                    <div
                      className="form-group"
                      id="imgselcaptcha"
                      style={{ display: "block" }}
                    >
                      <div
                        className="col-md-12 col-sm-12 col-comn toppadding"
                        style={{ paddingTop: "10px" }}
                      >
                        &nbsp;
                        <img
                          id="refreshImgCaptcha"
                          alt="Captcha"
                          title="Captcha"
                          src="/images/simpleCaptchaServ.png"
                        />
                        <a href="#" title="Refresh" aria-label="Refresh Captcha">
                          <span
                            className="captcha_refreshIcon"
                            style={{ fontSize: "20px", color: "#486d90" }}
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                    type="button"
                      style={{ width: "65px" }}
                      className="btn btn-default"
                      id="Button2"
                      onClick={handleLoginClick}>
                      Login
                    </button>
                    <button
                      style={{ width: "65px" }}
                      className="btn btn-default"
                      type="button"
                  
                      id="reset_btn"
                     >Reset
                    </button>
                  </div>
                </div>

                {/* Right section with links */}
                <div className="col-lg-6 col-md-6 col-sm-6 forgot_details">
                  <ul className="user_links">
                    <li>
                      <a href="#" aria-label="New User? Register here/Activate">
                        New User ? Register here/Activate
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-label="Forgot Username/Login Password"
                      >
                        Forgot Username / Login Password
                      </a>
                    </li>
                  </ul>

                  <div className="virtual">
                    <p className="m-0">
                      <input
                        aria-label="Enable Virtual Keyboard"
                        type="checkbox"
                        id="chkbox"
                        className="chek_box"
                      />
                      &nbsp; Enable Virtual Keyboard
                    </p>
                  </div>

                  <div className="col-sm-12 care_msg">
                    <a
                      href="https://crcf.bank.sbi/ccf/home/unauth?key1=444"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Register Complaint of Unauthorized Transaction"
                    >
                      <img
                        src="/images/actfast.png"
                        alt="ACT FAST"
                        style={{
                          margin: "30px 0px 20px 0px",
                          maxWidth: "95%",
                          textAlign: "center",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="virtual_link">
                For better security use the Online Virtual Keyboard to login.{" "}
                <a href="/npersonal/virtualkeyboard.html" aria-label="More">
                  <strong>More</strong>...
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-comn vk_bgmain vigilant_bgcolor">
              <div id="login_banner">
                <div id="vkb_content" className="virtual_key">
                      <div id="vkb_content" className="virtual_key">
                  <span id="kbplaceholder">
                    <table
                      border="0"
                      className="keyboardtbl"
                      cellSpacing="3px"
                      id="keypad"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <div className="vigilant_banner_wrapper">
                              <img
                                className="vb_img"
                                src="/images/login_img_transparentlady.png"
                                alt="login image"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr className="vkboard-points">
                          <td className="vigilantContent">
                            <span>Dear Customer,</span>
                            <ul>
                              <li>
                                OTP based login &amp; mandatory password change
                                after 180 days introduced for added security.
                              </li>
                              <li>
                                Please do not share OTP/password/user
                                information with anyone. Bank never asks for
                                such information.
                              </li>
                              <li>
                                For better control & security of your account, you can Lock or Unlock your INB access through link "Lock & Unlock User" available at bottom of this Page.
                              </li>
                              <li>
                                Mandatory Profile password change after 365 days introduced for added security
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0" id="login_area">
  <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="login_box">
      <span className="infoIcon"></span>
      <p>
        NEVER respond to any popup, email, SMS, or phone call, no matter how
        appealing or official looking, seeking your personal information such
        as username, password(s), mobile number, ATM Card details, etc. Such
        communications are sent or created by fraudsters to trick you into
        parting with your credentials.
      </p>
    </div>
  </div>

  <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="login_box">
      <span className="linkIcon"></span>
      <div className="login_xs w-100">
        <div className="row m-0">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <ul className="login_box_links">
              <li>
                <a href="https://crcf.bank.sbi" aria-label="Complaints">
                  Complaints
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    window.open(
                      "troubleloginhome.htm?bankCode=0",
                      "aboutus",
                      "width=780,height=500,status=1,scrollbars=1,location=0,resizable=yes"
                    )
                  }
                  aria-label="Trouble logging in"
                >
                  Trouble logging in
                </a>
              </li>
              <li>
                <a
                  href="/npersonal/passwordmanagement.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Password Management"
                >
                  Password Management
                </a>
              </li>
              <li>
                <a
                  href="/npersonal/securitytips.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Security Tips"
                >
                  Security Tips
                </a>
              </li>
              <li>
                <a
                  href="/npersonal/faq.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FAQ"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12">
            <ul className="login_box_links me-0">
              <li>
                <a
                  href="/npersonal/aboutphishing.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="About Phishing"
                >
                  About Phishing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => openemail()}
                  aria-label="Report Phishing"
                >
                  Report Phishing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    window.open(
                      "/preretail/lockunlockuseraccess.htm",
                      "aboutus",
                      "width=780,height=500,status=1,scrollbars=1,location=0,resizable=yes"
                    )
                  }
                  style={{ color: "#AD0000" }}
                  aria-label="Lock & Unlock User"
                >
                  <span></span>Lock & Unlock User
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    window.open(
                      "blockatmcardintermediate.htm",
                      "hotlistatmcard",
                      "width=780,height=500,status=1,scrollbars=1,location=0,resizable=yes"
                    )
                  }
                  aria-label="Block ATM Card"
                >
                  Block ATM Card
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="login_box">
      <span className="tickIcon" style={{ marginBottom: "10px" }}></span>
      <p>
        This site is certified by Verisign as a secure and trusted site. All
        information sent or received in this site is encrypted using 256-bit
        encryption
      </p>
    </div>
  </div>
</div>
<div className="row m-0" id="provide_list">
  <div className="col-lg-12 col-md-12 col-sm-12">
    <ul className="provide">
      <li>
        Mandatory fields are marked with an asterisk (*)
      </li>
      <li>
        Do not provide your username and password anywhere other than in this page
      </li>
      <li>
        Your username and password are highly confidential. Never part with them. <strong>SBI</strong> will never ask for this information.
      </li>
    </ul>
  </div>
</div>
          </div>
        </div>
      </div>

      <input
        type="hidden"
        name="3io6"
        id="3io6"
        value="md5osi9tkkrfcf0i8fdgaog3k36fotek"
      />
    </form>
    <Footer />
    </>
  </> 
  );
};

export default LoginForm;
