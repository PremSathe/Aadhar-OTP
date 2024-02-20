// import React, { useState } from "react";
// import OtpInput from "./otp-input";
// import "./styles.scss";
// const PhoneOtpForm = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);

//   const handlePhoneNumber = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handlePhoneSubmit = (event) => {
//     event.preventDefault();

//     // Phone number validation
//     const regex = /[^0-9]/g;
//     if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
//       alert("Invalid Phone Number");
//       return;
//     }
//     // Call backend API or proceed with OTP verification
//     setShowOtpInput(true);
//   };

//   const onOtpSubmit = (otp) => {
//     console.log("Login Successful", otp);
//     // Proceed with OTP validation or login process
//   };

//   return (
//     <div className="phoneOtpForm">
//       {!showOtpInput ? (
//         <form onSubmit={handlePhoneSubmit} className="phoneForm">
//           <input
//             maxLength={12}
//             type="tell"
//             // type="text"
//             value={phoneNumber}
//             onChange={handlePhoneNumber}
//             placeholder="Enter Your Aadhar Number"
//             className="phoneNumberInput"
//           />
//           <button type="submit" className="submitBtn">
//             Verify
//           </button>
//         </form>
//       ) : (
//         <div className="otpInputContainer">
//           <p className="otpInfo">
//             {" "}
//             Please enter 6 digits OTP sent to your mobile number {phoneNumber}
//           </p>
//           <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhoneOtpForm;

import React, { useState } from "react";
import OtpInput from "./otp-input";
import "./styles.scss";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone number validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    // Call backend API or proceed with OTP verification
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
    // Proceed with OTP validation or login process
  };

  const maskedPhoneNumber = phoneNumber.replace(/\d(?=\d{4})/g, "*"); // Replace all digits with *

  return (
    <div className="phoneOtpForm">
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} className="phoneForm">
          <input
            maxLength={12}
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Your Aadhar Number"
            className="phoneNumberInput"
          />
          <button type="submit" className="submitBtn">
            Verify
          </button>
        </form>
      ) : (
        <div className="otpInputContainer">
          <p className="otpInfo">
            {" "}
            Please enter 6 digits OTP sent to your mobile number <br /> +91 {maskedPhoneNumber}
          </p>
          <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
