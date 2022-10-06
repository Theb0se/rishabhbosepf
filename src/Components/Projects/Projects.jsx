import React from "react";
import "./Project.css";
import ProjectData from "../../data/projectsData";

function Projects() {
  return (
    <div className="projects" id="work">
      <h2 class="numbered-heading">
        {" "}
        <span className="highlight">02.</span> Some Things I’ve Built
      </h2>
      <div className="projects-container">
        {ProjectData.map((project) => (
          <div className="singleproject" data-aos="fade-up" data-aos-duration="5000">
            <div className="img">
              <div className="browser">
                <div class="p-circle"></div>
                <div class="p-circle"></div>
                <div class="p-circle"></div>
              </div>
              <img src={project.img} alt="" />
            </div>
            <div className="project-details">
              <div className="heading highlight">{project.Name}</div>
              <p className="content">{project.disc}</p>

              <div className="tools">
                <p>Tools And Technologies Used :-</p>
                <ul>
                  {project.tools.map((tools) => (
                    <li>{tools}</li>
                  ))}
                </ul>
              </div>
              <div className="links">
                <a href={project.github}>
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href={project.live}>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
