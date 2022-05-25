import React from "react";
import "./../styles/pages/Home.scss";

import landingImage from "./../styles/util/images/landing-image.jpg";

const Home = () => {
  return (
    <body className="container">
      <div className="section-conatiner" id="home">
        <img src={landingImage} alt="David's portfilo landing image" />
        <div className="text-wrapper">
          <h1>David's Portfolio</h1>
        </div>
      </div>

      <div className="section-conatiner" id="about">
        <div className="title-container">
          <h1 className="text-wrapper">About Me</h1>
          <div className="underline"></div>
        </div>

        
      </div>

      <div className="section-conatiner" id="resume">
        <div className="title-container">
          <h1 className="text-wrapper">Resume</h1>
          <div className="underline"></div>
        </div>
      </div>

      <div className="section-conatiner" id="projects">
        <div className="title-container">
          <h1 className="text-wrapper">Projects</h1>
          <div className="underline"></div>
        </div>
      </div>

      <div className="section-conatiner" id="contact">
        <div className="title-container">
          <h1 className="text-wrapper">contact</h1>
          <div className="underline"></div>
        </div>
      </div>
    </body>
  );
};

export default Home;
