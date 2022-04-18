import React from "react";
import styled from "styled-components";

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.5rem;
    &::before {
      content: "";
      width: 10rem;
      height: 0.33rem;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
    }
    &::after {
      content: "";
      width: 4rem;
      height: 0.33rem;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--primary-color);
      border-radius: 15px;
    }
    span {
      font-weight: 600;
      color: rgba(25, 29, 43, 0.44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
    }
  }
`;

export default function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyled>
  );
}
