import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PrimaryButtonStyled = styled.a`
  background-color: var(--background-light-color-2);
  padding: 0.8rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    background-color: var(--primary-color);
    left: 0;
    bottom: 0;
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out 0.4s;
    z-index: -1;
  }
  &:hover::after {
    width: 100%;
    height: 100%;
  }
`;

export default function PrimaryButtonDownload({ title, link, name }) {
  return (
    <PrimaryButtonStyled href={link} download={name}>
      {title}
    </PrimaryButtonStyled>
  );
}
