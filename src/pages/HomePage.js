import React from "react";
import styled from "styled-components";
import Particle from "../components/Particle";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }
  .icon {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .i-github {
    border: 2px solid var(--border-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  }
`;

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-tsparticles">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Rafał</span>
        </h1>
        <p>I'm a front end developer located in Poland.</p>
        <div className="icon">
          <a
            href="https://github.com/musikhood"
            className="i-github"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}
