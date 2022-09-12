import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import MobileNav from "./components/Nav/MobileNav";
import Hero from "./components/Hero/Hero";
import About, { CarouselItem } from "./components/About/About";
import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import reichman from "./assets/images/headshots/1.jpg";
import rich from "./assets/images/headshots/2.jpg";
import maughan from "./assets/images/headshots/3.jpg";
import house from "./assets/images/headshots/4.jpg";
import yoon from "./assets/images/headshots/5.jpg";
import wilkerson from "./assets/images/headshots/6.jpg";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About>
          <CarouselItem>
            <img src={reichman} className="headshot" alt="" />
            <div className="bio">
              <h3 className="name">Mark V. Reichman, MD</h3>
              <p className="specialty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                deleniti minima molestias.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={rich} className="headshot" alt="" />
            <div className="bio">
              <h3 className="name">Charles C. Rich, MD</h3>
              <p className="specialty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                deleniti minima molestias.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={maughan} className="headshot" alt="" />
            <div className="bio">
              <h3 className="name">Peter H. Maughan, MD</h3>
              <p className="specialty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                deleniti minima molestias.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={house} className="headshot" alt="" />
            <div className="bio">
              <h3 className="name">Paul A. House, MD</h3>
              <p className="specialty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                deleniti minima molestias.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={yoon} className="headshot" alt="" />
            <div className="bio">
              <h3 className="name">Nam K. Yoon, MD</h3>
              <p className="specialty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                deleniti minima molestias.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={wilkerson} className="headshot" alt="" />
            <div className="bio">
              <h3 className="name">Christopher G. Wilkerson, MD</h3>
              <p className="specialty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                deleniti minima molestias.
              </p>
            </div>
          </CarouselItem>
        </About>
        <Info></Info>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
