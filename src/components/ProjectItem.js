import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectItemStyled = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1000px;
  .left-content {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 15px;
    }
  }
  .right-content {
    width: 100%;
    h2 {
      font-size: 1.4rem;
      color: var(--white-color);
    }
    p {
      margin-top: 1rem;
      font-size: 1.1rem;
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      .demo {
        background-color: var(--background-light-color-2);
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-weight: 600;
        color: var(--white-color);
        transition: all 0.4s ease-in-out;
        font-size: 0.9rem;
        &:hover {
          background-color: var(--primary-color);
        }
      }
      .gh {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          transition: all 0.5s ease-in-out;
          font-size: 1.8rem;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    max-width: 500px;
    .right-content {
      order: -1;
    }
  }
`;

export default function ProjectItem({
  title,
  description,
  image,
  reverse,
  ghlink,
  demolink,
}) {
  return (
    <ProjectItemStyled>
      <div className="left-content">
        <img src={image} alt="Project pic" />
      </div>
      <div className="right-content" style={reverse ? { order: -1 } : null}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <a href={demolink} className="demo" target="_blank" rel="noreferrer">
            View Demo
          </a>
          <a href={ghlink} className="gh" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </ProjectItemStyled>
  );
}
