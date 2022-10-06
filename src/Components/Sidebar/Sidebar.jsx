import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="social">
        <div class="social-icons">
          <a
            href="https://github.com/Theb0se"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rishabhbose3107"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/theb0se"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/theb0se/?utm_medium=copy_link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Rishabhbose1?t=pBEwgM2P0R0Tl8MTZfzIHw&amp;s=09"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>

          <a
            href="https://wa.me/+919754472611"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="email">
        <div className="mailcon">
          <a href="mailto:rishabhbose3@gmail.com">rishabhbose3@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
