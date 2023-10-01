import React from 'react';
import './otp.css'; // Import your CSS file

function OTPVerification() {
  return (
    <div id="otpDiv">
      <img
        src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
        alt=""
      />
      <div id="otpline">
        <h2>Verify with OTP</h2>
        <p>Sent to registered Mobile No.</p>
        <p id="otpNum"></p>
      </div>
      <div id="inputDiv">
        <input id="otp1" type="tel" maxLength="1" />
        <input id="otp2" type="tel" maxLength="1" />
        <input id="otp3" type="tel" maxLength="1" />
        <input id="otp4" type="tel" maxLength="1" />
      </div>
      <button id="checkotp">
        <a href="end.html">CONFIRM</a>
      </button>
      <div id="checkDiv">
        <h4>RESEND OTP</h4>
      </div>
    </div>
  );
}

export default OTPVerification;
