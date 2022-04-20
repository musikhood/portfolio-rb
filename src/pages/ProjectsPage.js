import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ProjectItem from "../components/ProjectItem";
import projects from "../data/projects";

const ProjectsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ProjectsPage() {
  return (
    <MainLayout>
      <Title title="Projects" span="Projects" />
      <ProjectsPageStyled>
        {projects.map(
          ({ id, title, description, image, reverse, ghlink, demolink }) => (
            <ProjectItem
              key={id}
              title={title}
              description={description}
              image={image}
              reverse={reverse}
              ghlink={ghlink}
              demolink={demolink}
            />
          )
        )}
      </ProjectsPageStyled>
    </MainLayout>
  );
}
