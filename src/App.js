import React from "react";
import Nav from "./componenets/Nav/Nav";
import MobileNav from "./componenets/Nav/MobileNav";
import Hero from "./componenets/Hero/Hero";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
