import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, ThemeContext } from "styled-components";
import { useViewPortWidth } from "../../../utils/getViewport";
import ProjectSlider from "../../slider/project-slider/ProjectSlider";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import ErrorBoundary from "../../error/ErrorBoundary";
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

const ProjectDetails = (props) => {
  const themeContext = useContext(ThemeContext);
  const [isMounted, setIsMounted] = useState(true);
  const { project, nextProject, prevProject, history } = props;

  const theme = {
    ...themeContext,
    color: {
      ...themeContext.color,
      primary: project.colors.primary,
      primaryLight: project.colors.primaryLight,
    },
  };

  //needed to have the animations when the project id is changed
  //if not delayed the exit animation goes directly on the new project details page
  async function delayNavigation(e, target) {
    e.preventDefault();
    await setIsMounted(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      history.push(target);
      setIsMounted(true);
    }, 750);
  }

  const width = useViewPortWidth();

  return (
    <ErrorBoundary type="layout">
      <ThemeProvider theme={theme}>
        <CSSTransition
          classNames="project"
          timeout={{
            enter: 750,
            exit: 750,
          }}
          appear
          enter
          exit
          in={isMounted}
        >
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
                      <ListItem key={`challenge-${index}`}>
                        {challenge}
                      </ListItem>
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
                  imgSrc={`${project.id}/${project.photos.project[0].src}`}
                  imgLazy={`${project.id}/${project.photos.project[0].lazy}`}
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
              clickHandler={delayNavigation}
            />
          </Main>
        </CSSTransition>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    challenges: PropTypes.array.isRequired,
    url: PropTypes.string,
    photos: PropTypes.shape({
      project: PropTypes.array.isRequired,
    }),
  }),
  prevProject: PropTypes.object.isRequired,
  nextProject: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default ProjectDetails;
