import React, { useEffect, useState } from "react";
import "./carditem.css";
import LineGraph from "../../components/LInegraph/Linegraph";
import ProductCharge from "../../components/HomeCharge/PorductCharge";
import img1 from "../../assets/Images/washing-machine (2).png";
import img2 from "../../assets/Images/smart-tv.png";
import img3 from "../../assets/Images/idea-bulb.png";
import img4 from "../../assets/Images/hair-dryer.png";
import img5 from "../../assets/Images/fridge (1).png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base__url } from "../../service/api";
const Carditem = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const getData = () => {
    axios
      .get(`${base__url}/api/subtopic${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="carditem__section">
      <div className="container">
        <div className="carditem__wrapper">
          <div className="carditem__home">
            <div className="carditem___box">
              <div className="carditem__imgbox">
                {id - 0 === 1 && (
                  <img width={200} height={200} src={img1} alt="productimg" />
                )}
                {id - 0 === 2 && (
                  <img width={200} height={200} src={img2} alt="productimg" />
                )}
                {id - 0 === 3 && (
                  <img width={200} height={200} src={img3} alt="productimg" />
                )}
                {id - 0 === 4 && (
                  <img width={200} height={200} src={img4} alt="productimg" />
                )}
                {id - 0 === 5 && (
                  <img width={200} height={200} src={img5} alt="productimg" />
                )}

                {/* <img
                  width={200}
                  height={200}
                  className="carditem__img"
                  src={Productimg}
                  alt="cardimg"
                /> */}
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
