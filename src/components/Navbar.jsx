import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

function NavBar() {
  const [active, setActive] = useState("nav-menu");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");
  };

  return (
    <nav className="nav">
      <div className="words-container">
        <Link to="/home" className="full-name">
          Alexander Brynolf
        </Link>
        <span className="showcase">Showcase</span>
      </div>
      <ul className={active}>
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sortingPage" className="nav-link">
            Sorting page
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/map" className="nav-link">
            Map
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/itemsshop" className="nav-link">
            Items shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/foodordering" className="nav-link">
            Food ordering
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cv" className="nav-link">
            CV
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className="nav-toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
