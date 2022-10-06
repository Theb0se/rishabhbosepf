import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import Bottomnav from './../../Components/Bottomnav/Bottomnav';
function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <Bottomnav />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Homepage;
