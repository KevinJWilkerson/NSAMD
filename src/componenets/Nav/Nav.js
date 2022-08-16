import React from "react";
import logo from "../../assets/images/logos/NSAMD.jpg";

const Nav = () => {
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <img src={logo} className="" />
        </a>
      </h2>
      <nav>
        <ul className="flex-row flex-end">
          <li className="mx-2">
            <a>Home</a>
          </li>
          <li className="mx-2">
            <a>Team</a>
          </li>
          <li className="mx-2">
            <a>Resources</a>
          </li>
          <li className="mx-2">
            <a>Patient Portal</a>
          </li>
          <li className="mx-2">
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
