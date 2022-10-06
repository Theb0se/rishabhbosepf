import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import Slider from "./../Slider/Slider";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="heroMain" id="home">
      <div className="hero">
        <div className="name">
          <p data-aos="fade-down">Hi, my name is</p>
          <h1 data-aos="fade-down">Rishabh Bose </h1>
          <h3 data-aos="fade-down">I build things for the web.</h3>
        </div>
        <div className="typing" data-aos="fade-down">
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "Ui & Ux Designer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 25,
            }}
          />
        </div>
        <p className="caption" data-aos="fade-down" data-aos-duration="500">
          i'M a Passionate{" "}
          <span className="highlight">full-stack Developer</span> &{" "}
          <span className="highlight">Ux Designer</span> with 1+ years of
          hands-on experience in developing websites/applications using a wide
          range of front-end and back-end skills like HTML, CSS , JavaScript,
          ReactJs , Nodejs etc. Developed 20+ websites from scratch. Looking to
          further enhance HTML5, CSS3, Javascript , React And Nodejs skills as
          the future full stack developer.
        </p>
        <div className="cta">
          <Link to="contact" activeClass="active" smooth={true} duration={1000}>
            <div className="hireme">
              <p>Hire Me</p>
            </div>
          </Link>
          <div className="resume">
            <p>
              <a
                href="https://drive.google.com/file/d/1kyWdgG1y2gtTuk_9knJhZBcX5-gPB7dk/view"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Hero;
