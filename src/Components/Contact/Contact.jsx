import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact" data-aos="fade-up" data-aos-duration="5000">
      <div className="contactHeading">
        <h2 class="overline">
          <span className="highlight">03.</span> What’s Next?
        </h2>
        <h2 class="title">Get In Touch</h2>
      </div>
      <div className="contactdescrip">
        <p>
          Please don't hesitate to ask me anything! If you have any questions or
          just want to say hello, I'll get back to you as soon as possible!
        </p>
      </div>
      <div className="contactCta">
        <a href="mailto:rishabhbose3@gmail.com" className="helloDiv">
          Say Hello!
        </a>
      </div>
    </div>
  );
}

export default Contact;
