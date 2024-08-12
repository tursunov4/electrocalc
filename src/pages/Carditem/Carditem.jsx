import React from "react";
import "./carditem.css";
import LineGraph from "../../components/LInegraph/Linegraph";
import Productimg from "../../assets/Images/air-conditioner.png";
import ProductCharge from "../../components/HomeCharge/PorductCharge";
const Carditem = () => {
  return (
    <section className="carditem__section">
      <div className="container">
        <div className="carditem__wrapper">
          <div className="carditem__home">
            <div className="carditem___box">
              <div className="carditem__imgbox">
                <img
                  width={200}
                  height={200}
                  className="carditem__img"
                  src={Productimg}
                  alt="cardimg"
                />
              </div>
              <div className="carditem__bottombox">0.1 w</div>
            </div>
            <ProductCharge />
          </div>
          <LineGraph />
        </div>
      </div>
    </section>
  );
};

export default Carditem;
