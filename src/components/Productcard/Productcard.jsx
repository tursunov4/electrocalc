import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import ToggleSwitch from "../Toogleswitch/Toogleswitch";
import { useNavigate } from "react-router-dom";
import { base__url } from "../../service/api";
const Productcard = ({ spendKw, image, id }) => {
  const [active, setActive] = useState(false);
  const [volt, setVolt] = useState("");
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get(`${base__url}/api/subtopic${id}`)
      .then((res) => {
        setVolt(res.data?.at(-1)?.power);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (id) {
      getData();
      const intervalId = setInterval(getData, 5000);
      return () => clearInterval(intervalId);
    }
  });
  return (
    <div className="productcard">
      <div
        className={`productcard__box  ${active && "productcard__boxactive"} `}
      >
        <div className="toggle">
          <ToggleSwitch isOn={active} setIsOn={setActive} />
        </div>
        {image ? (
          <img
            onClick={() => navigate(`/carditem/${id}`)}
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
        onClick={() => navigate(`/carditem/${id}`)}
        className={`productcard__bottom--box ${
          active && "productcard__boxactive"
        }`}
      >
        <p className="product__kw">
          {" "}
          {volt === 0 || !volt ? 0 : (volt - 0).toFixed(2)} w
        </p>
      </div>
    </div>
  );
};

export default Productcard;
