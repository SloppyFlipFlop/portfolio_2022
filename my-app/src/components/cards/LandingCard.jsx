import React from "react";
import landing from "./../../styles/util/images/landing-image.jpg";
import "./../../styles/components/cards/LandingCard.scss";

import { useInView } from "react-intersection-observer";

// special case for landing card

const LandingCard = ({ id }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={cardRef} className="section-conatiner" id={id}>
      <img src={landing} alt="Landscape" />
      <div className="text-wrapper">
        <h1>David's Portfolio</h1>
      </div>
    </div>
  );
};

export default LandingCard;
