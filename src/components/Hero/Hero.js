import React from "react";
import hero from "../../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="hero flex-row">
      <img src={hero} className="hero-img" />
      <p>Exceptional Patient Care by Board Certified Neurosurgeons</p>
    </div>
  );
};

export default Hero;
