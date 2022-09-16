import React from "react";
import "./Otp.css";
import MyBackgroundImage from "../assets/images/BG.png";
import Yabax from "../assets/images/yabax.png";
import OtpInput from "react-otp-input";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Otp(props) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [resendOtp, setResendOtp] = useState();

  const handleChange = (otp) => setOtp(otp);

  const oneHour = new Date(
    new Date().setMinutes(new Date().getMinutes() + 1)
  ).toISOString();

  const resendHandler = async () => {
    const brrtoken = Cookies.get("tokens");
    const response = axios
      .post(
        "https://yabxdemo-in.yabx.co/apis/v1/otps/resend",
        {
          msisdn: "8765432011",
          partner_code: "yabxdemo_in",
          purpose: "customer_verification",
        },
        {
          headers: {
            Authorization: `Bearer ${brrtoken}`,
            "partner-code": "yabxdemo_in",
            os: "web_application",
            "package-id": "f88723dc39b92ee5",
          },
        }
      )
      .then((response) => setResendOtp(response.data));
  };
  const submitOtp = () => {
    if (otp === resendOtp.code) {
      navigate("/");
    }
  };
  console.log(resendOtp);
  return (
    <div
      className="Login"
      style={{
        backgroundImage: `url(${MyBackgroundImage})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="center">
        <img src={Yabax} />
        <div className="loginBox">
          <h2>Welcome Mr Khan</h2>
          <span>A OTP has been sent 7406512810 </span>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
            placeholder={""}
            containerStyle={"containerStyle"}
            inputStyle={"inputStyle"}
          />
          <p>
            Haven't recieved yet?
            <button onClick={resendHandler} className="resend">
              Resend in
              {/* <Countdown targetDate={oneHour} formatType={"dd_hh_mm_ss"} />, */}
            </button>
          </p>
          <button onClick={submitOtp}>Submit OTP</button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
