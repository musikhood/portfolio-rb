import React from "react";
import "./Footer.scss";
import Cat from "../../img/Cat5.svg";
import Github from "../../img/LogoGH.svg";
import Linkedin from "../../img/Linkedin.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__ImgWrapper">
        <a href="https://github.com/musikhood" target="_blank" rel="noreferrer">
          <img src={Github} alt="github" />
        </a>
      </div>
      <div className="Footer__Info">©copyright Rafał Białowski</div>
      <div className="Footer__ImgWrapper">
        <a
          href="https://www.linkedin.com/in/rafał-białowski-524595238/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" />
        </a>

        <div className="Footer__CatWrapper">
          <img src={Cat} alt="Cat" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
