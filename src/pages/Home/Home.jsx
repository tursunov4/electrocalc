import React, { useEffect, useState } from "react";
import "./home.css";
import HomeCharge from "../../components/HomeCharge/HomeCharge";
import Productcard from "../../components/Productcard/Productcard";
import Homecard from "../../components/Homecard/Homecard";
import homcatalogimg1 from "../../assets/Images/catalog1.jpg";
import homcatalogimg2 from "../../assets/Images/catalog2.jpg";
import img1 from "../../assets/Images/washing-machine (2).png";
import img2 from "../../assets/Images/smart-tv.png";
import img3 from "../../assets/Images/idea-bulb.png";
import img4 from "../../assets/Images/hair-dryer.png";
import img5 from "../../assets/Images/fridge (1).png";
import img6 from "../../assets/Images/air-conditioner.png";
import axios from "axios";
const Home = () => {
  const [catalogactive, setCatalogActive] = useState(0);
  const [allwatt, setAllwatt] = useState(0);
  const handleCatalog1 = () => {
    if (catalogactive !== 1) {
      setCatalogActive(1);
    } else {
      setCatalogActive(0);
    }
  };
  const handleCatalog2 = () => {
    if (catalogactive !== 2) {
      setCatalogActive(2);
    } else {
      setCatalogActive(0);
    }
  };

  const getData = () => {
    axios
      .get(`http://192.168.31.50:3000/api/subtopic6`)
      .then((res) => {
        console.log(res.data);
        setAllwatt(res.data?.at(-1)?.power);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    const intervalId = setInterval(getData, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <section className="homesection">
      <div className="container">
        <div className="homewrapper">
          <div className="homecatalog">
            <div
              onClick={() => handleCatalog1()}
              className={
                catalogactive === 1
                  ? "catalogbox catalogbox__active"
                  : "catalogbox"
              }
            >
              <div
                className={
                  catalogactive === 1
                    ? "catalog__innerline1 catalogbox__active"
                    : "catalog__innerline1"
                }
              ></div>
              <img className="catalogbox__img" src={homcatalogimg1} alt="img" />
            </div>
            <div
              onClick={() => handleCatalog2()}
              className={
                catalogactive === 2
                  ? "catalogbox catalogbox__active"
                  : "catalogbox"
              }
            >
              <div
                className={
                  catalogactive === 2
                    ? "catalog__innerline catalogbox__active"
                    : "catalog__innerline"
                }
              ></div>
              <img className="catalogbox__img" src={homcatalogimg2} alt="img" />
            </div>
            <div className="catalogmainline">
              <div
                className={
                  catalogactive === 1
                    ? "catalogmainline__inner catalogbox__active"
                    : "catalogmainline__inner"
                }
              ></div>
              <div
                className={
                  catalogactive === 2
                    ? "catalogmainline__inner catalogbox__active"
                    : "catalogmainline__inner"
                }
              ></div>
            </div>
          </div>
          <div
            className={
              catalogactive !== 0
                ? "homecatalog__left catalogbox__active"
                : "homecatalog__left"
            }
          ></div>
          <div className="homechargebox">
            <Homecard />
            <HomeCharge />
          </div>
          <div className="homecharge__all">
            <span
              className={
                catalogactive !== 0
                  ? "homecharge__line catalogbox__active"
                  : "homecharge__line "
              }
            ></span>
            <div className="homecharge__all--value">
              {allwatt === 0 ? 0 : (allwatt - 0).toFixed(2)} w
            </div>
          </div>
          <div className="produclist">
            <div
              className={
                catalogactive !== 0
                  ? "produc__mainline catalogbox__active"
                  : "produc__mainline"
              }
            ></div>
            <ul className="produclist__innerbox">
              <div
                className={
                  catalogactive !== 0
                    ? "porductlist__innerline catalogbox__active "
                    : "porductlist__innerline"
                }
              ></div>
              <li>
                <Productcard id={1} spendKw={2} image={img1} active={true} />
              </li>
              <li>
                <Productcard id={2} spendKw={4} image={img2} active={true} />
              </li>
              <li>
                <Productcard id={3} spendKw={5} image={img3} active={true} />
              </li>
            </ul>
            <ul className="produclist__innerbox">
              <div
                className={
                  catalogactive !== 0
                    ? "porductlist__innerline catalogbox__active "
                    : "porductlist__innerline"
                }
              ></div>
              <li>
                <Productcard id={4} spendKw={6} image={img4} active={true} />
              </li>
              <li>
                <Productcard id={5} spendKw={1} image={img5} active={true} />
              </li>
              <li>
                <Productcard spendKw={3} active={true} />
              </li>
            </ul>
            <ul className="produclist__innerbox">
              <div
                className={
                  catalogactive !== 0
                    ? "porductlist__innerline catalogbox__active "
                    : "porductlist__innerline"
                }
              ></div>
              <li>
                <Productcard active={true} />
              </li>
              <li>
                <Productcard active={true} />
              </li>
              <li>
                <Productcard active={true} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
