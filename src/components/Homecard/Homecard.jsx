import React, { useState, useEffect } from "react";
import "./style.css";
import homeicon from "../../assets/Images/home.svg";
import Modal from "../Modal/Modal"; // Import the Modal component

const Homecard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    sessionStorage.getItem("selectedPower") || "3 kw"
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    sessionStorage.setItem("selectedPower", value); // Save to sessionStorage
    setIsModalOpen(false);
  };

  return (
    <div className="homecard">
      <img width={250} src={homeicon} alt="homeicon" />
      <div className="homecard__value" onClick={handleOpenModal}>
        {selectedValue}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelect={handleSelectValue}
        selectedValue={selectedValue}
      />
    </div>
  );
};

export default Homecard;
