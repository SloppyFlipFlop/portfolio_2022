import React from "react";
import { useInView } from "react-intersection-observer";

import "./../../styles/components/card/Card.scss";

// for cards you want to fade up

const Card = ({ id, title, children }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={cardRef}
      className={`section-conatiner ${isInView ? "show" : ""}`}
      id={id}
    >
      <div className="title-container">
        <h1 className="text-wrapper">{title}</h1>
        <div className="underline"></div>
      </div>
      {children}
    </div>
  );
};

export default Card;
