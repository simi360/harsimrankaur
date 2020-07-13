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
  Img,
  LeftSection,
  RightSection,
  FlexContainer,
  FlexChilds,
  ProjectNavigation,
} from "./ProjectDetails.styles";

const ProjectDetails = ({ project, nextProject, prevProject }) => {
  const themeContext = useContext(ThemeContext);

  const theme = {
    ...themeContext,
    color: {
      ...themeContext.color,
      primary: project.colors.primary,
      primaryLight: project.colors.primaryLight,
    },
  };

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

          {project.url && (
            <Link
              url={project.url}
              linkText={`Visit ${project.name}'s website`}
              externalLink={true}
              color={theme.color.primary}
            />
          )}
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
        <ProjectNavigation
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </Main>
    </ThemeProvider>
  );
};

ProjectDetails.prototype = {
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
