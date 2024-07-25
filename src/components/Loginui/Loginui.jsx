import React from "react";
import "./style.css";
const Loginui = ({ children }) => {
  return (
    <section className="loginui">
      <div className="container">
        <div className="loginui__wrapper">
          <div className="loginui__box">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Loginui;
