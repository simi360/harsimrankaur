import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Main,
  ProjectTitle,
  CatTitle,
  CatDescription,
  ListItem,
  Link,
  Arrow,
  Img,
  RightSection,
} from "./ProjectDetails.styles";

const ProjectDetails = ({ project }) => {
  console.log(project);
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

          <CatTitle>Year :</CatTitle>
          <CatDescription>{project.year}</CatDescription>

          <CatTitle>Client :</CatTitle>
          <CatDescription>{project.client}</CatDescription>

          <CatTitle>Technologies :</CatTitle>
          <CatDescription>
            {project.technologies.map((tech, index) => {
              return index == project.technologies.length - 1
                ? tech
                : `${tech}, `;
            })}
          </CatDescription>

          <CatTitle>Challenges :</CatTitle>
          <ul>
            {" "}
            {project.challenges.map((challenge, index) => (
              <ListItem key={`challenge-${index}`}>{challenge}</ListItem>
            ))}
          </ul>
          <Link href={project.url} target="_blank" rel="noreferrer">
            {`Visit ${project.name}'s website`}{" "}
            <Arrow color={project.colors.primary} />
          </Link>
        </section>
        <RightSection>
          <Img
            imgSrc={
              process.env.NODE_ENV === "development"
                ? `src/assets/${project.photos.project[0]}`
                : ` ${project.photos.project[0]}`
            }
            imgAlt=""
          />
        </RightSection>
      </Main>
    </ThemeProvider>
  );
};

export default ProjectDetails;
