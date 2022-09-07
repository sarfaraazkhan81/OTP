import React from "react";
import "./Login.css";
import MyBackgroundImage from "../assets/images/BG.png";
import Yabax from "../assets/images/yabax.png";
import OtpInput from "react-otp-input";
import { useState } from "react";
import Countdown from "react-countdown-simple";
function Otp(props) {
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);

  const oneHour = new Date(
    new Date().setMinutes(new Date().getMinutes() + 1)
  ).toISOString();

  var time = new Date();
  console.log(time.getSeconds());
  return (
    <div className="center">
      <img src={Yabax} />
      <div className="loginBox">
        <h2>Welcome Mr Khan</h2>
        <span>A OTP has been sent 7406512810 </span>
        {/* <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span> </span>}
          placeholder={""}
          containerStyle={"containerStyle"}
          inputStyle={"inputStyle"}
        /> */}
        <p>
          Haven't recieved yet?{" "}
          <span>
            Resend in{" "}
            <Countdown targetDate={oneHour} formatType={"dd_hh_mm_ss"} />,
          </span>
        </p>
        <button>Send OTP</button>
      </div>
    </div>
  );
}

export default Otp;
