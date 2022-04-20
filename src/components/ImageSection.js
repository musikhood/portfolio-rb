import React from "react";
import styled from "styled-components";
import resume from "../img/avatar.png";
import PrimaryButtonDownload from "./PrimaryButtonDownload";
import MySkills from "./SkillsSection";
import Title from "./Title";
const ImageSectionStyled = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  .right-content {
    width: 100%;
    order: -1;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      width: 80%;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;

      .info-title {
        margin-right: 3rem;
        color: var(--white-color);
        @media screen and (max-width: 800px) {
          margin-right: 1.5rem;
        }

        p {
          font-weight: 600;
          @media screen and (max-width: 800px) {
            font-size: 1rem;
          }
        }
      }
      .info p {
      }
      .info-title,
      .info {
        padding: 1rem 0;
        p {
          padding: 0.3rem 0;
          @media screen and (max-width: 800px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
  .left-content {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    max-width: 600px;
    margin: 3rem auto;
    gap: 5rem;
  }
`;

export default function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <Title title="My Skills" span="My Skills" />
        <MySkills />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Rafał</span>
        </h4>
        <p className="paragraph">
          I'm self taught front end developer who's in love with programming. I
          finished school with the title of IT technician. I want to improve my
          skills and work with real projects.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name </p>
            <p>Age </p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location </p>
          </div>
          <div className="info">
            <p>Rafał Białowski</p>
            <p>19</p>
            <p>Polish</p>
            <p>Polish / English </p>
            <p>Poland, Lublin</p>
          </div>
        </div>
        <PrimaryButtonDownload
          title="Curriculum Vitae"
          link={resume}
          name="cv.png"
        />
      </div>
    </ImageSectionStyled>
  );
}
