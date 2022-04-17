import styled from "styled-components";
import React from "react";
import Navigation from "./Navigation";

const SidebarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-dark-color);
`;

export default function Sidebar() {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
}
