import React from "react";
import "./Modal.css"; // CSS file for the modal styles

const Modal = ({ isOpen, onClose, onSelect, selectedValue }) => {
  if (!isOpen) return null;

  const options = ["2 kw", "3 kw", "5 kw", "7 kw"];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times; {/* X icon */}
        </button>
        <h2>Select Power</h2>
        <ul>
          {options.map((option) => (
            <li
              key={option}
              className={`modal-option ${
                selectedValue === option ? "selected" : ""
              }`}
              onClick={() => onSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
