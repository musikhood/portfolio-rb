import React from "react";
import "./Projects.scss";
import Paw from "../../img/Paw.svg";
import Cat1 from "../../img/Cat1.svg";
import Cat2 from "../../img/Cat2.svg";
import Cat3 from "../../img/Cat3.svg";
import Cat4 from "../../img/Cat4.svg";
import TodoApp from "../../img/TodoApp.png";
import countries from "../../img/countries.png";
import ecommerce from "../../img/ecommerce.png";
import github from "../../img/LogoGH.svg";
import { Project } from "../../Components";

function Projects() {
  return (
    <div className="Projects">
      <div className="Projects__Header">
        <div className="Projects__HeaderCatContainer">
          <img src={Cat1} alt="Cat1" />
        </div>
        <div className="Projects__HeaderText">
          My Projects
          <div className="Projects__PawWrapper">
            <img src={Paw} alt="Paw" />
          </div>
        </div>
      </div>
      <div className="Projects__Content">
        <Project
          title="E-commerce"
          about="Technologies used: Html, Sass, React,Redux, Bem. This is a fully functioning e-commerce website. It has a lot of cool features. Each of them is described in my github page"
          img={ecommerce}
          catImg={Cat2}
          catPosition="1"
          reverse={false}
          live="https://musikhood.github.io/ecommerce/#/"
          code="https://github.com/musikhood/ecommerce"
        />
        <Project
          title="Todo App"
          about="Technologies used: Html, Sass, React, Bem. This is a custom Todo Application with some fancy looking style and draggable objects"
          img={TodoApp}
          catImg={Cat3}
          catPosition="2"
          reverse={true}
          live="https://musikhood.github.io/todo-app/"
          code="https://github.com/musikhood/todo-app"
        />
        <Project
          title="Countries"
          about="Technologies used: Html, Sass, React, API, BEM and webpack. This is a website shows all countries in the world and their data using API"
          img={countries}
          catImg={Cat4}
          catPosition="3"
          reverse={false}
          live="https://musikhood.github.io/country/"
          code="https://github.com/musikhood/country"
        />
      </div>
      <div className="Projects__Footer">
        <p>For more projects visit my github account</p>
        <a href="https://github.com/musikhood" target="_blank" rel="noreferrer">
          <div className="Projects__FooterImgWrapper">
            <img src={github} alt="github icon" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
