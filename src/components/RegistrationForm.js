import React,{useState} from 'react';
import "./RegistrationForm.css"
export default function RegistrationForm(){
      const [accountNo, setAccountNo] = useState('');
  const [cifNo, setCifNo] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [txnRights, setTxnRights] = useState('');
  const [loginCaptchaValue, setLoginCaptchaValue] = useState('');
  const [captchaOption, setCaptchaOption] = useState('IMG');

  // Stub functions, replace with actual logic or import them if external
  const disableautocompletion = (id) => {
    // Implement your logic here
  };
  const numericOnly = (event) => {
    // Allow only numeric inputs
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  };
  const disableCtrlKeyCombination = (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
      return false;
    }
    return true;
  };
  const fnBranchCodeClick = () => {
    // Implement your function
    alert('Get Branch Name clicked');
  };
  const selectCountryCode = () => {
    // Your implementation here
  };
  const displayEmailCountry = () => {
    // Your implementation here
  };
  const SetMaxLength = () => {
    // Your implementation here
  };
  const getUserSelImgCaptcha = () => {
    setCaptchaOption('IMG');
  };
  const getUserSelAudCaptcha = () => {
    setCaptchaOption('AUD');
  };
  const refreshImg = () => {
    // Refresh captcha image logic
    alert('Captcha refreshed');
  };
  const submitiAgree = (form) => {
    // Your logic here
    alert('I Agree clicked');
  };
  const submitiDisAgree = () => {
    alert('I Disagree clicked');
  };
  const submitUserDrivenValidate = (form, key) => {
    alert('Submit clicked with key: ' + key);
  };
  const getFocus = (id) => {
    // Your implementation
  };
    return(
        <div id="wrapper" class="container">
			{/* <!-- Header --> */}
			<div class="row">
				<header id="headerContent">
					<div className="col-sm-3">
					<img
                         src="https://retail.onlinesbi.sbi/sbijava/retail/images/sbi_logo.png"
                         alt="SBI Logo"
                         className="sbi-logo" />
                     <div className="sbi-onlinedashboard-text ms-1">ONLINE</div>
					</div>					
				</header>
			</div>
           <div className="row">
        <div id="com_container" className="ps-4">
        <div className="col-sm-12 no_pad">
          <h2 className="px-0 mb-1">User Driven Registration - New User</h2>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="mandatory_txt">Mandatory fields are marked with an asterisk (*)</p>

          <div className="form-group d-md-flex">
            <label className="control-label col-md-3 col-comn" htmlFor="accountNo">
              Account Number <span className="mandatory_txt">*</span>
            </label>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="accountNo"
                id="accountNo"
                maxLength={17}
                value={accountNo}
                onFocus={() => disableautocompletion('accountNo')}
                onBlur={() => disableautocompletion('accountNo')}
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onKeyPress={numericOnly}
                onKeyDown={disableCtrlKeyCombination}
                onChange={(e) => setAccountNo(e.target.value)}
              />
            </div>

            <div className="col-md-5 col-comn toppadding ps-2">
              (Account Number is available in your passbook and/or statement of account)
            </div>
          </div>

          <div className="form-group d-md-flex">
            <label className="control-label col-md-3 col-comn" htmlFor="cifNo">
              CIF Number <span className="mandatory_txt">*</span>
            </label>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="cifNo"
                id="cifNo"
                size={20}
                maxLength={20}
                value={cifNo}
                onFocus={() => disableautocompletion('cifNo')}
                onBlur={() => disableautocompletion('cifNo')}
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onKeyPress={numericOnly}
                onKeyDown={disableCtrlKeyCombination}
                onChange={(e) => setCifNo(e.target.value)}
              />
            </div>
            <div className="col-md-5 col-comn toppadding ps-2">
              (CIF Number is available in your passbook and/or statement of account)
            </div>
          </div>

          <div className="form-group d-md-flex">
            <label className="control-label col-md-3 col-comn" htmlFor="branchCode">
              Branch Code <span className="mandatory_txt">*</span>
            </label>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="branchCode"
                id="branchCode"
                size={10}
                maxLength={5}
                value={branchCode}
                onFocus={() => disableautocompletion('branchCode')}
                onBlur={() => disableautocompletion('branchCode')}
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onKeyPress={numericOnly}
                onKeyDown={disableCtrlKeyCombination}
                onChange={(e) => setBranchCode(e.target.value)}
              />
            </div>
            <div className="col-md-2 common_btn ps-2 mt-2 mt-md-0 text-md-center">
              <button
                className="btn btn-default"
                type="button"
                id="branchCD"
                name="branchCD"
                onClick={fnBranchCodeClick}
              >
                Get Branch Name
              </button>
            </div>
            <div className="col-md-3 col-comn toppadding ps-2">
              (Please enter 5 digit branch code )
            </div>
          </div>

          <div className="form-group d-md-flex">
            <label className="control-label col-md-3 col-comn" htmlFor="selCountry">
              Country
            </label>
            <div className="col-md-4">
              <select
                className="form-control form-select"
                name="countryCode"
                title="Select Country"
                id="selCountry"
                value={countryCode}
                onChange={(e) => {
                  setCountryCode(e.target.value);
                  selectCountryCode();
                  displayEmailCountry();
                }}
              >
                <option value="">-- Select Country --</option>
                <option value="1" hidden>
                  4DigitsISD
                </option>
                <option value="91">India</option>
                <option value="1_AI">ANGUILLA</option>
              </select>
            </div>
          </div>

          <div className="form-group d-md-flex">
            <label className="control-label col-md-3 col-comn" htmlFor="mobileNo">
              Registered mobile Number <span className="mandatory_txt">*</span>
            </label>

            <div className="col-md-4">
              <input type="hidden" name="country" title="Country" id="country" />
              <input type="hidden" name="ISD4Digits" title="ISD4Digits" id="ISD4Digits" />
              <div className="w-25 float-start">
                <input
                  className="form-control"
                  name="country_Code1"
                  type="text"
                  size={3}
                  maxLength={3}
                  title="Country Code"
                  id="country_Code1"
                  value=""
                  disabled={true}
                />
              </div>
              <div className="w-75 float-start ps-3">
                <input
                  className="form-control"
                  type="text"
                  name="mobileNo"
                  size={11}
                  maxLength={11}
                  title="mobileNo"
                  id="mobileNo"
                  value={mobileNo}
                  onClick={SetMaxLength}
                  onFocus={() => disableautocompletion('mobileNo')}
                  onBlur={() => disableautocompletion('mobileNo')}
                  onCopy={(e) => e.preventDefault()}
                  onPaste={(e) => e.preventDefault()}
                  onKeyPress={numericOnly}
                  onKeyDown={disableCtrlKeyCombination}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-5 col-comn toppadding ps-2" id="area_code_mobile_reg"></div>
          </div>

          <div className="form-group d-md-flex">
            <label className="control-label col-md-3 col-comn" htmlFor="txnRights">
              Facility Required <span className="mandatory_txt">*</span>
            </label>
            <div className="col-md-4">
              <select
                className="form-control form-select"
                name="txnRights"
                title="Transaction Rights"
                id="txnRights"
                value={txnRights}
                onChange={(e) => setTxnRights(e.target.value)}
              >
                <option value="--Select Transaction Rights--">-- Select Transaction Rights --</option>
                <option value="09">Full Transaction Rights</option>
                <option value="08">Limited Transaction Rights</option>
                <option value="05">View Rights</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group" id="noAudImgSelection" style={{ display: 'none' }}>
              <label htmlFor="captcha">
                Captcha <span className="mandatory_txt">*</span>
              </label>
            </div>

            <div className="d-md-flex" style={{ minHeight: '45px' }}>
              <div
                className="form-group col-md-3 col-comn pe-2 mb-0"
                id="imgselection"
                style={{ display: captchaOption === 'IMG' ? 'block' : 'none' }}
              >
                <label className="control-label" htmlFor="loginCaptchaValue">
                  Enter the text as shown in the image<span className="mandatory_txt">*</span>
                </label>
              </div>
              <div
                className="form-group col-md-3 col-comn pe-2 mb-0"
                id="audioselection"
                style={{ display: captchaOption === 'AUD' ? 'block' : 'none' }}
              >
                <label className="control-label" htmlFor="loginAudionCaptcha">
                  Enter the text as from audio<span className="mandatory_txt">*</span>
                </label>
              </div>
              <div className="col-md-4">
                <input
                  name="loginCaptchaValue"
                  className="form-control"
                  id="loginCaptchaValue"
                  maxLength={5}
                  onFocus={() => {
                    disableautocompletion('loginCaptchaValue');
                    getFocus('loginCaptchaValue');
                  }}
                  onBlur={() => disableautocompletion('loginCaptchaValue')}
                  type="text"
                  autoComplete="off"
                  value={loginCaptchaValue}
                  onChange={(e) => setLoginCaptchaValue(e.target.value)}
                  onCopy={(e) => e.preventDefault()}
                  onPaste={(e) => e.preventDefault()}
                  onKeyPress={disableCtrlKeyCombination}
                  onKeyDown={disableCtrlKeyCombination}
                  aria-label="Enter The Captcha"
                />
              </div>
            </div>

            <div className="d-md-flex">
              <div className="col-md-3"></div>
              <div className="col-md-4">
                <div className="form-group" id="captchaOptionDisplay">
                  <label
                    className="col-sm-12 col-md-12 col-comn"
                    htmlFor="capOption"
                    aria-label="Select one of the Captcha options"
                    style={{ marginTop: '10px' }}
                  >
                    <span>Select one of the Captcha options</span>
                    <span className="mandatory_txt">*</span>
                  </label>

                  <div className="d-md-flex">
                    <label className="col-md-6 toppadding col-comn">
                      <input
                        aria-label="Image Captcha"
                        name="optionOfCaptcha"
                        type="radio"
                        checked={captchaOption === 'IMG'}
                        id="capOption"
                        value="IMG"
                        onChange={getUserSelImgCaptcha}
                      />
                      <span style={{ paddingLeft: '3px', color: '#c33a1a' }}>Image Captcha</span>
                    </label>

                    <label className="col-md-6 toppadding col-comn">
                      <input
                        aria-label="Audio Captcha"
                        name="optionOfCaptcha"
                        type="radio"
                        checked={captchaOption === 'AUD'}
                        id="capOption"
                        value="AUD"
                        onChange={getUserSelAudCaptcha}
                      />
                      <span style={{ paddingLeft: '3px', color: '#c33a1a' }}>Audio Captcha</span>
                    </label>
                  </div>
                </div>

                <div
                  className="form-group col-md-12"
                  id="imgselcaptcha"
                  style={{ display: captchaOption === 'IMG' ? 'block' : 'none' }}
                >
                  <div
                    className="col-md-12 col-sm-12 col-comn col-xs-6 toppadding"
                    style={{ paddingTop: '10px', marginBottom: '20px' }}
                  >
                    &nbsp;
                    <img id="refreshImgCaptcha1" alt="Captcha" src="/images/simpleCaptchaServe.png" />
                    <a href="#!" title="Refresh" onClick={(e) => { e.preventDefault(); refreshImg(); }}>
                      <span className="captcha_refreshIcon" style={{ fontSize: '20px', color: '#486d90' }}></span>
                    </a>
                  </div>
                </div>

                <div
                  className="form-group col-md-12"
                  id="audelcaptcha"
                  style={{ display: captchaOption === 'AUD' ? 'block' : 'none' }}
                >
                  <div className="form-group" id="othrIEAud" style={{ display: 'block' }}>
                    <audio controls id="loginAudioCaptcha"></audio>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden inputs */}
          <input name="bankCode" type="hidden" value="0" />
          <input name="issueCode" type="hidden" value="" />
          <input
            type="hidden"
            name="uribkey"
            id="uribkey"
            value="Gm5HprrHhfsKRW2gw0+c9Qb+kdCb9BlZGd7LaSoFdQ8="
          />
          

          {/* Consent Section */}
          <p>Dear Customer,</p>
          <span>
            After onboarding on SBI Online, the created user ID will be enabled for login through YONO and YONO Lite as well,
            in addition to SBI Online.
          </span>
          <p>By clicking on 'I Agree' you hereby give consent for the same. Please do not share your login credentials with anyone.</p>

          <div className="common_btn text-center" align="center">
            <button
              className="btn btn-default"
              name="I Agree"
              type="button"
              id="iAgreeconsent"
              onClick={(e) => submitiAgree(e.target.form)}
            >
              I Agree
            </button>
            <button
              className="btn btn-default"
              name="I Disagree"
              type="button"
              id="iDisAgreeconsent"
              onClick={submitiDisAgree}
            >
              I Disagree
            </button>
          </div>

          <div className="common_btn text-center" align="center">
            <button
              className="btn btn-default"
              name="Submit"
              type="button"
              id="go"
              value=" Submit "
              onClick={(e) =>
                submitUserDrivenValidate(e.target.form, 'Gm5HprrHhfsKRW2gw0+c9Qb+kdCb9BlZGd7LaSoFdQ8=')
              }
              disabled
              align="center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-0" id="footer">
				<footer id="footer_area" class="px-3">
						<div class="col-sm-4 float-start">
							<p>© State Bank of India</p>
						</div>
						<div class="col-sm-8 float-end">
							<ul id="footer_links" class="float-end d-none d-md-block">
							{/* <!--Modified by DeepaV for ISD fixes starts --> */}
								<li><a href="/sbijava/retail/html/Privacy_Statement.html" target="_blank" rel="noopener noreferrer">Privacy Statement</a>
								</li>
								<li><a href="/sbijava/retail/html/hmpg_disclosure.html" target="_blank" rel="noopener noreferrer">Disclosure</a>
								</li>
								<li><a href="/sbijava/retail/html/Terms_of_Use.html" target="_blank" rel="noopener noreferrer">Terms of Service
										(Terms &amp; Conditions)</a>
							{/* <!--Modified by DeepaV for ISD fixes ends --> */}
								</li>
							</ul>
						</div>
				</footer>
			</div>
  </div>
    )
}