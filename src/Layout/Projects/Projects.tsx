import React from "react";
import "./Projects.scss";
import Paw from "../../img/Paw.svg";
import Cat1 from "../../img/Cat1.svg";

function Projects() {
  return (
    <div className="Projects">
      <div className="Projects__Header">
        <div className="Projects__HeaderCatContainer">
          <img src={Cat1} alt="Cat1" />
        </div>
        <div className="Projects__HeaderText">
          My Projects
          <img src={Paw} alt="Paw" />
        </div>
      </div>
      <div className="Projects__Content"></div>
    </div>
  );
}

export default Projects;
