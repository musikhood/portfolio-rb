import styled from "styled-components";
import React from "react";
import Navigation from "./Navigation";

const SidebarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-dark-color);
  transition: all 0.4s ease-in-out;
  z-index: 2000;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
  }
  @media screen and (max-width: 500px) {
    width: 11rem;
  }
`;

export default function Sidebar({ navToggle, setNavToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation setNavToggle={setNavToggle} />
    </SidebarStyled>
  );
}
