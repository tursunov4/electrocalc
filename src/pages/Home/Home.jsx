import React from "react";
import "./home.css";
import HomeCharge from "../../components/HomeCharge/HomeCharge";
import Productcard from "../../components/Productcard/Productcard";
import Homecard from "../../components/Homecard/Homecard";
const Home = () => {
  return (
    <section className="homesection">
      <div className="container">
        <HomeCharge />
        <Productcard active={true} />
        <Homecard />
      </div>
    </section>
  );
};

export default Home;
