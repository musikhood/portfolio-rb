import React from "react";
import "./Header.scss";
import Avatar from "../../img/Avatar.svg";
import CatAvatar from "../../img/CatAvatar.svg";

function Header() {
  return (
    <header className="Header">
      <div className="Header__About">
        Hi I'm <span>Rafal Bialowski</span> A <span>Frontend Developer</span>
      </div>
      <div className="Header__AvatarContainer">
        <img src={Avatar} className="Header__Avatar" alt="Avatar" />
        <div className="Header__CatAvatarWrapper">
          <img src={CatAvatar} className="Header__CatAvatar" alt="CatAvatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
