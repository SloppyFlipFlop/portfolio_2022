import React from "react";

import Card from "../components/cards/Card";
import LandingCard from "../components/cards/LandingCard";

import "./../styles/pages/Home.scss";

const Home = () => {
  return (
    <div className="container">
      <LandingCard id={`home`} />

      <Card id={`about`} title="About Me" />

      <Card id={`resume`} title="Resume" />

      <Card id={`projects`} title="Projects" />

      <Card id={`contact`} title="Contact" />
    </div>
  );
};

export default Home;
