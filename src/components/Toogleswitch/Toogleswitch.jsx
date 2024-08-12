import React, { useState } from "react";

const ToggleSwitch = ({ isOn, setIsOn }) => {
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      style={{
        display: "inline-block",
        padding: "5px",
        background: isOn ? "#00e3ff" : "#ccc",
        borderRadius: "20px",
        cursor: "pointer",
        width: "40px",
        position: "relative",
        height: "24px",
      }}
      onClick={toggleSwitch}
    >
      <div
        style={{
          background: "white",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          position: "absolute",
          top: "2px",
          left: isOn ? "calc(100% - 22px)" : "2px",
          transition: "left 0.2s ease",
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
