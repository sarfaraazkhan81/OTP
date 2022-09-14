import React from "react";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Otp from "./component/Otp";
import Mobile from "./component/Mobile";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route element={<Mobile />} path="/" />
          <Route element={<Otp />} path="/otp" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
