import React from "react";
import "./../styles/pages/Home.scss";

import landingImage from "./../styles/util/images/landing-image.jpg";

const Home = () => {
  return (
    <body className="container">
      <div className="section-wrapper" id="home">
        <img src={landingImage} alt="David's portfilo landing image" />
      </div>

      <div className="section-wrapper" id="about">About</div>
    </body>
  );
};

export default Home;
