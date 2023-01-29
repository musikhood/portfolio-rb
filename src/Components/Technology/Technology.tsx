import React from "react";
import "./Technology.scss";

type Tech = {
  Icon: any;
  text: string;
};

function Technology({ Icon, text }: Tech) {
  return (
    <div className="Technology">
      <div className="Technology__ImgWrapper">
        <img src={Icon} alt="Icon" />
      </div>
      {text}
    </div>
  );
}

export default Technology;
