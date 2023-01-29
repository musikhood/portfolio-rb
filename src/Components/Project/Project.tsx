import React from "react";
import "./Project.scss";

type Projecttype = {
  title: string;
  about: string;
  img: any;
  catImg: any;
  catPosition: string;
  reverse: boolean;
  live: string;
  code: string;
};

function Project({
  title,
  about,
  img,
  catImg,
  catPosition,
  reverse,
  live,
  code,
}: Projecttype) {
  return (
    <div className={reverse ? "Project Project--Reverse" : "Project"}>
      <div className="Project__ImageContainer">
        <div className={`Project__Cat Project__Cat--${catPosition}`}>
          <img src={catImg} alt="cat" />
        </div>
        <div className="Project__ImageWrapper">
          <img src={img} alt="ProjectImage" />
        </div>
      </div>
      <div className="Project__AboutContainer">
        <h2>{title}</h2>
        <p>{about}</p>
        <div className="Project__Buttons">
          <a href={live} target="_blank" className="Project__ButtonLive">
            Live
          </a>
          <a href={code} target="_blank" className="Project__ButtonCode">
            Code /&#62;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
