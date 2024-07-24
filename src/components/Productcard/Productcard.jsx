import React from "react";
import "./style.css";
const Productcard = ({ image, active, spendKw }) => {
  return (
    <li className="productcard">
      <div
        className={`productcard__box  ${active && "productcard__boxactive"} `}
      >
        {image ? (
          <img
            className="porductcard__img"
            src={image}
            alt="productimage"
            width={150}
            height={150}
          />
        ) : (
          <div className="productcard__load"></div>
        )}
      </div>
      <div
        className={`productcard__bottom--box ${
          active && "productcard__boxactive"
        }`}
      >
        <p className="product__kw">{active ? spendKw : 0} kw</p>
      </div>
    </li>
  );
};

export default Productcard;
