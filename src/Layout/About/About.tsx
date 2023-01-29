import React from "react";
import "./About.scss";
import Paw from "../../img/Paw.svg";
import CatAvatar from "../../img/CatAvatar2.svg";

function About() {
  return (
    <div className="About">
      <div className="About__Header">
        About Me
        <div className="About__HeaderPaw">
          <img src={Paw} alt="Paw" />
        </div>
      </div>
      <div className="About__Content">
        <div className="About__CatWrapper">
          <img src={CatAvatar} alt="cat" />
        </div>
        <div className="About__Text">
          I graduated from the school with title of <span>IT technician</span>.
          Now I’m studying <span>computer science</span>. Programming is my
          passion and it really brings me joy. I’m interested in creating
          responsive websites and making clean and reusable code. I’m willing to
          learn new technologies or frameworks. I’m looking for
          <span> my first job</span> as Frontend Developer to be able to develop
          further and gain new experience.
        </div>
      </div>
    </div>
  );
}

export default About;
