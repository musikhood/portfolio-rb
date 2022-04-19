import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";

const AboutStyled = styled.section``;

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title="About Me" span="About Me" />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
}
