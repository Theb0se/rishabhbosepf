import React from "react";
import { Link } from "react-scroll";
import "./Bottomnav.css";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailIcon from "@mui/icons-material/Mail";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

function Bottomnav() {
  return (
    <div className="bottomNav">
      <div className="btmLinks">
        <ul>
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-50}
          >
            <li>
              <HomeIcon fontSize="large" />
            </li>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <li>
              <PermIdentityIcon fontSize="large" />
            </li>
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <li>
              {" "}
              <AccountTreeIcon fontSize="large" />
            </li>
          </Link>
          <Link to="contact" activeClass="active" smooth={true} duration={1000}>
            <li>
              <MailIcon fontSize="large" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Bottomnav;
