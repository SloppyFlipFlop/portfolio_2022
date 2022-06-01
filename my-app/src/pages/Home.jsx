import React from "react";

// import "./../utils/js/customAnimations.js";
// import "./../utils/scss/customAnimations.scss";
import "./../styles/pages/Home.scss";
import landing from "./../styles/util/images/landing-image.jpg";
const Home = () => {
  const sections = document.querySelectorAll(".section-conatiner");

  // console.log(sections);

  const fadeInOptions = {
    root: null, // it is the viewport
    threshold: 1,
    rootMargin: "0px 0px 50px 0px",
  };

  // make a new observer
  const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.toggle("appear");
      fadeInOnScroll.unobserve(entry.target);
    });
  }, fadeInOptions);

  sections.forEach((section) => {
    fadeInOnScroll.observe(section);
  });

  return (
    <div className="container">
      <div className="section-conatiner" id="home">
        <img src={landing} alt="Landscape" />
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
      {/* <script src="./../utils/js/customAnimations.js"></script> */}
    </div>
  );
};

export default Home;
