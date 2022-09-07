import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Yabax from "../assets/images/yabax.png";
import Otp from "./Otp";

function Mobile() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState([]);
  const [otp, setOtp] = useState("");

  const handleSubmi = (e) => {
    e.preventDefault();
    if (mobile.length > 9) {
      setOtp([1, 2, 3, 4]);
      return navigate("/otp");
    } else {
      console.log("sorry boss");
    }
  };
  const onchangehandler = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setMobile(value);
  };

  console.log(otp);
  return (
    <div className="center">
      <img src={Yabax} />
      <div className="loginBox">
        <h2>Welcome to YABAX</h2>
        <span>Please enter your mobile number</span>

        <input
          type="text"
          name=""
          id=""
          required
          onChange={onchangehandler}
          value={mobile}
        />
        <button type="submit" className="sendOtp" onClick={handleSubmi}>
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default Mobile;
