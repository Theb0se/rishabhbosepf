import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { useEffect } from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          duration={1000}
          offset={-50}
        >
          <h1>
            R<span>.</span>
          </h1>
        </Link>
      </div>
      <div className="navLinks">
        <ul>
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-50}
          >
            <li>Home</li>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <li>About</li>
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <li>Work</li>
          </Link>
          <Link to="contact" activeClass="active" smooth={true} duration={1000}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="hire">
        <Link to="contact" activeClass="active" smooth={true} duration={1000}>
          <div className="hireBtn">Hire Me</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
