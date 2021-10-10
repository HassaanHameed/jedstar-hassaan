import React from "react";
import backgroundImage from "./img/backgroundImage.png";
import Header from "./Header";
import Dashboard from "./Dashboard";

import "./App.css";
import Jedstarcalculator from "./Jedstarcalculator";
import Footer from "./Footer";
const App = () => {
  return (
    <div
      className="main-div"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        color: "white",
      }}
    >
      <Header />
      <Dashboard />
      <Jedstarcalculator />
      <Footer />
    </div>
  );
};

export default App;
