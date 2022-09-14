import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Yabax from "../assets/images/yabax.png";
import Otp from "./Otp";
import axios from "axios";
import Cookies from "js-cookie";
import MyBackgroundImage from "../assets/images/BG.png";

function Mobile() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState([]);
  const [otp, setOtp] = useState("");

  // const URL  = `https://yabxdemo-in.yabx.co/apis/v1/auth/token`;
  // {
  //     "client_secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJ5YWJ4ZGVtb19pbiIsIm9zIjoid2ViX2FwcGxpY2F0aW9uIiwicGFja2FnZV9pZCI6ImY4ODcyM2RjMzliOTJlZTUiLCJjbGllbnRfa2V5IjoiYzBhNDliMjctNGI5Yi00NjU4LTk2YTMtOGU1YzQ2YTg2YzQwIn0.asTHljqR3Gr9EgkMpkrDskbgidJw6B3KFpcz0du_PUs"
  // }

  // const handleSubmi = (e) => {
  //   e.preventDefault();
  //   if (mobile.length > 9) {
  //     setOtp([1, 2, 3, 4]);
  //     return navigate("/otp");
  //   } else {
  //     console.log("sorry boss");
  //   }
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(mobile);
    if (mobile.length > 9) {
      navigate("/otp");
    }
    const brrtoken = Cookies.get("tokens");
    const response = await axios.post(
      "https://yabxdemo-in.yabx.co/apis/v1/otps/generate",
      {
        msisdn: mobile,
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
    );
    console.log(response, "this is new ");
  };
  const onchangehandler = (e) => {
    const value = e.target.value;
    setMobile(value);
    // console.log(value);
  };

  const sendClientSecret = async () => {
    const response = await axios.post(
      "https://yabxdemo-in.yabx.co/apis/v1/auth/token",
      {
        client_secret:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJ5YWJ4ZGVtb19pbiIsIm9zIjoid2ViX2FwcGxpY2F0aW9uIiwicGFja2FnZV9pZCI6ImY4ODcyM2RjMzliOTJlZTUiLCJjbGllbnRfa2V5IjoiYzBhNDliMjctNGI5Yi00NjU4LTk2YTMtOGU1YzQ2YTg2YzQwIn0.asTHljqR3Gr9EgkMpkrDskbgidJw6B3KFpcz0du_PUs",
      },
      {
        headers: {
          "partner-code": "yabxdemo_in",
          os: "web_application",
          "package-id": "f88723dc39b92ee5",
        },
      }
    );
    const tokens = response.data;
    console.log(tokens);
    Cookies.set("tokens", tokens.access_token);
  };

  useEffect(() => {
    sendClientSecret();
  }, []);

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
        <form className="loginBox" onSubmit={submitHandler}>
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
          <button type="submit" className="sendOtp">
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mobile;
