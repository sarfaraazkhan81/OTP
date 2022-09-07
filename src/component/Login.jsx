import React from "react";
import MyBackgroundImage from "../assets/images/BG.png";
import "./Login.css";
import Mobile from "./Mobile";
import Otp from "./Otp";

function Login() {
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
      <Mobile />
      {/* <Otp /> */}
    </div>
  );
}

export default Login;
