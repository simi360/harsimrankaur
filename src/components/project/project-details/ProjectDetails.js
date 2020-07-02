import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, ThemeContext } from "styled-components";
import { useViewPortWidth } from "../../../utils/getViewport";
import ProjectSlider from "../../slider/project-slider/ProjectSlider";
import {
  Main,
  ProjectTitle,
  CatTitle,
  CatDescription,
  ListItem,
  Link,
  Arrow,
  Img,
  LeftSection,
  RightSection,
  FlexContainer,
  FlexChilds,
} from "./ProjectDetails.styles";

const ProjectDetails = ({ project }) => {
  const theme = {
    color: {
      primary: project.colors.primary,
      primaryLight: project.colors.primaryLight,
    },
  };

  const themeContext = useContext(ThemeContext);
  const width = useViewPortWidth();

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <LeftSection>
          <ProjectTitle title={project.name} />

          <FlexContainer>
            <FlexChilds>
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
            </FlexChilds>
            <FlexChilds>
              <CatTitle>Challenges :</CatTitle>
              <ul>
                {" "}
                {project.challenges.map((challenge, index) => (
                  <ListItem key={`challenge-${index}`}>{challenge}</ListItem>
                ))}
              </ul>
            </FlexChilds>
          </FlexContainer>
          <Link href={project.url} target="_blank" rel="noreferrer">
            {`Visit ${project.name}'s website`}{" "}
            <Arrow color={project.colors.primary} />
          </Link>
        </LeftSection>
        <RightSection>
          {width < themeContext.bp.tablets && (
            <Img
              imgSrc={
                process.env.NODE_ENV === "development"
                  ? `src/assets/img/${project.id}/${project.photos.project[0].src}`
                  : `./img/${project.photos.project[0].src}`
              }
              imgLazy={
                process.env.NODE_ENV === "development"
                  ? `src/assets/img/${project.id}/${project.photos.project[0].lazy}`
                  : `./img/${project.photos.project[0].lazy}`
              }
              imgAlt=""
            />
          )}

          {width >= themeContext.bp.tablets && (
            <ProjectSlider
              photos={project.photos.project}
              theme={theme}
              projectId={project.id}
            />
          )}
        </RightSection>
      </Main>
    </ThemeProvider>
  );
};

ProjectDetails.prototype = {
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
