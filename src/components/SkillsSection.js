import React from "react";
import styled from "styled-components";

const MySkillsStyled = styled.div`
  margin: 4rem 0;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-transform: uppercase;
    gap: 1rem;
  }
  .box {
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 50px;
  }
`;

export default function MySkills() {
  return (
    <MySkillsStyled>
      <div className="container">
        <div className="box">html5</div>
        <div className="box">css3</div>
        <div className="box">javascript</div>
        <div className="box">react</div>
        <div className="box">sass</div>
        <div className="box">git</div>
        <div className="box">bem</div>
      </div>
    </MySkillsStyled>
  );
}
