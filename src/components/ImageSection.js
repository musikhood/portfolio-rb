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
    }
    .paragraph {
      padding: 1rem 0;
      width: 80%;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        margin-right: 3rem;
        color: var(--white-color);
        p {
          font-weight: 600;
        }
      }
      .info p {
      }
      .info-title,
      .info {
        padding: 1rem 0;
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
  .left-content {
    width: 100%;
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
          aliquid quis, quas asperiores tenetur veniam. Saepe consequuntur
          tempora dolorem eius nulla repellat. Praesentium commodi
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name </p>
            <p>Age </p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location </p>
            <p>Service </p>
          </div>
          <div className="info">
            <p>: Rafał Białowski</p>
            <p>: 19</p>
            <p>: Polish</p>
            <p>: Polish / English </p>
            <p>: Lublin, Poland </p>
            <p>: Frontend Developer </p>
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
