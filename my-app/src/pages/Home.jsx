import React from "react";
import Navbar from "../components/Navbar";
import "./../styles/pages/Home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <body className="we">
        <div id="home">Home</div>

        <div id="about">About</div>
      </body>
    </div>
  );
};

export default Home;
