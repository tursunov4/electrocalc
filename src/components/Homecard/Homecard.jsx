import React from "react";
import "./style.css";
import homeicon from "../../assets/Images/home.svg";
const Homecard = () => {
  return (
    <div className="homecard">
      <img width={250} src={homeicon} alt="homeicon" />
      <div className="homecard__value">21 kw</div>
    </div>
  );
};

export default Homecard;
