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
          <li className="px-2">
            <a>Home</a>
          </li>
          <li className="px-2 dropdown">
            <a className="dropdown">Physicians</a>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a>Mark V. Reichman, MD</a>
                </li>
                <li>
                  <a>Charles C. Rich, MD</a>
                </li>
                <li>
                  <a>Peter H. Maughan, MD</a>
                </li>
                <li>
                  <a>Paul A. House, MD</a>
                </li>
                <li>
                  <a>Nam K. Yoon, MD</a>
                </li>
                <li>
                  <a>Christopher G. Wilkerson, MD</a>
                </li>
                <li>
                  <a>Dave J. Kotter, APRN</a>
                </li>
                <li>
                  <a>Lori E. Passey, APRN</a>
                </li>
                <li>
                  <a>Holly K. Cushing, PA-C</a>
                </li>
                <li>
                  <a>Karissa Jackson, APRN-C</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="px-2">
            <a>Resources</a>
          </li>
          <li className="px-2">
            <a>Patient Portal</a>
          </li>
          <li className="px-2">
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
