import React from "react";
import logo from "../../assets/images/logos/NSAMD.jpg";

const Nav = () => {
  return (
    <header className="flex-row px-1">
      <a href="/" className="header-logo container">
        <img src={logo} className="" />
      </a>

      <nav>
        <ul className="flex-row flex-end space-between">
          <li className="">
            <button>Home</button>
          </li>
          <li className="dropdown">
            <button className="dropdown">Physicians</button>
            <div className="dropdown-content">
              <li className="phys-1">
                <a>Mark V. Reichman, MD</a>
              </li>
              <li className="phys-2">
                <a>Charles C. Rich, MD</a>
              </li>
              <li className="phys-3">
                <a>Peter H. Maughan, MD</a>
              </li>
              <li className="phys-4">
                <a>Paul A. House, MD</a>
              </li>
              <li className="phys-5">
                <a>Nam K. Yoon, MD</a>
              </li>
              <li className="phys-6">
                <a>Christopher G. Wilkerson, MD</a>
              </li>
              <li className="phys-7">
                <a>Dave J. Kotter, APRN</a>
              </li>
              <li className="phys-8">
                <a>Lori E. Passey, APRN</a>
              </li>
              <li className="phys-9">
                <a>Holly K. Cushing, PA-C</a>
              </li>
              <li className="phys-10">
                <a>Karissa Jackson, APRN-C</a>
              </li>
            </div>
          </li>
          <li className="">
            <button>Resources</button>
          </li>
          <li className="">
            <button>Patient Portal</button>
          </li>
          <li className="">
            <button>Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
