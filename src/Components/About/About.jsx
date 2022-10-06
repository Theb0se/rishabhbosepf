import React from "react";
import "./About.css";
import Rishabh from "../../files/Images/rishabhImg.jpg";

function About() {
  return (
    <div className="about-main" id="about">
      <div className="aboutGrid" data-aos="fade-up" duration="2000">
        <h2 class="numbered-heading">
          {" "}
          <span className="highlight">01.</span> About Me
        </h2>
        <div className="aboutInner">
          <div className="aboutText">
            <p>
              Hello! My name is <span className="highlight">Rishabh Bose</span>{" "}
              and I enjoy creating things that live on the internet. My interest
              in web development started back in 2017 when I decided to try
              editing custom Tumblr themes — turns out hacking together a custom
              reblog button taught me a lot about HTML & CSS!
            </p>
            <br />
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              Tech Company, a start-up, and Also Working As a Freelance
              Developer. My main focus these days is building accessible,
              inclusive products and digital experiences for a variety of
              clients.
            </p>
            <br />
            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul class="skills-list">
              <li>Html</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React.Js</li>
              <li>Node.js</li>
              <li>Chakra Ui</li>
              <li>mui</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="aboutImg">
            <div className="imgAbout">
              <img src={Rishabh} alt="" width={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
