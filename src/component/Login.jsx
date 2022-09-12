import React from "react";
import MyBackgroundImage from "../assets/images/BG.png";
import EditDetails from "./EditDetails";

import "./Login.css";
import Mobile from "./Mobile";
import Otp from "./Otp";
import PersonalDetails from "./PersonalDetails";

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
      {/* <Mobile /> */}
      {/* <Otp /> */}
      <PersonalDetails />
      {/* <EditDetails /> */}
    </div>
  );
}

export default Login;
