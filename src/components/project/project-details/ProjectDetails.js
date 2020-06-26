import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Main,
  ProjectTitle,
  ProjectCategoryTitle,
} from "./ProjectDetails.styles";

const ProjectDetails = ({ project }) => {
  const theme = {
    color: {
      primary: project.colors.primary,
      primaryLight: project.colors.primaryLight,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <section>
          <ProjectTitle title={project.name} />

          <ProjectCategoryTitle>Year</ProjectCategoryTitle>
          <p>{project.year}</p>

          <ProjectCategoryTitle>Client</ProjectCategoryTitle>
          <p>{project.client}</p>

          <ProjectCategoryTitle>Technologies</ProjectCategoryTitle>
          <p>
            {project.technologies.map((tech, index) => {
              return index == project.technologies.length - 1
                ? tech
                : `${tech}, `;
            })}
          </p>

          <ProjectCategoryTitle>Challenges</ProjectCategoryTitle>
          <ul>
            {" "}
            {project.challenges.map((challenge, index) => (
              <li key={`challenge-${index}`}>{challenge}</li>
            ))}
          </ul>
          <a href={project.url} target="_blank" rel="noreferrer">
            {`Visit ${project.name}'s website`}
          </a>
        </section>
      </Main>
    </ThemeProvider>
  );
};

export default ProjectDetails;
