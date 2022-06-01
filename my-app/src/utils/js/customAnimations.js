// import { useEffect } from "react";

// const sectionOne = document.getElementById("about");
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
    entry.target.classList.add("appear");
    fadeInOnScroll.unobserve(entry.target);
  });
}, fadeInOptions);

sections.forEach((section) => {
  fadeInOnScroll.observe(section);
});
