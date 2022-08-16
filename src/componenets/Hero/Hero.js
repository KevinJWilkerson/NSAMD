import React from "react";
import hero from "../../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="hero flex-row">
      <img src={hero} className="hero-img" />
      <p> this is a paragraph </p>
    </div>
  );
};

export default Hero;
