import React from "react";
import "./Technologies.scss";
import Paw from "../../img/Paw.svg";
import ReactIcon from "../../img/React.svg";
import ReduxIcon from "../../img/Redux.svg";
import SassIcon from "../../img/Sass.svg";
import WebpackIcon from "../../img/Webpack.svg";
import GitIcon from "../../img/Git.svg";
import VSCIcon from "../../img/VSC.svg";
import FigmaIcon from "../../img/Figma.svg";
import TypescriptIcon from "../../img/Typescript.svg";
import MongoDBIcon from "../../img/MongoDB.svg";
import ExpressIcon from "../../img/Express.svg";
import { Technology } from "../../Components";

function Technologies() {
  return (
    <div className="Technlogies">
      <div className="Technologies__Header">
        Technologies
        <div className="Technologies__HeaderPaw">
          <img src={Paw} alt="Paw" />
        </div>
      </div>
      <div className="Technologies__Content">
        <div className="Technologies__Info">
          <div className="Technologies__title">Technologies i mostly use</div>
          <div className="Technologies__Wrapper">
            <Technology Icon={ReactIcon} text="React" />
            <Technology Icon={ReduxIcon} text="Redux" />
            <Technology Icon={SassIcon} text="Sass" />
            <Technology Icon={WebpackIcon} text="Webpack" />
            <Technology Icon={GitIcon} text="Git" />
          </div>
        </div>
        <div className="Technologies__Info">
          <div className="Technologies__title">Tools</div>
          <div className="Technologies__Wrapper">
            <Technology Icon={VSCIcon} text="VSC" />
            <Technology Icon={FigmaIcon} text="Figma" />
          </div>
        </div>
        <div className="Technologies__Info">
          <div className="Technologies__title">
            Technologies i currently learn
          </div>
          <div className="Technologies__Wrapper">
            <Technology Icon={TypescriptIcon} text="Typescript" />
            <Technology Icon={MongoDBIcon} text="MongoDB" />
            <Technology Icon={ExpressIcon} text="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
