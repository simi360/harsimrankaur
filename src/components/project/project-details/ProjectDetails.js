import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, ThemeContext } from "styled-components";
import { useViewPortWidth } from "../../../utils/getViewport";
import ProjectSlider from "../../slider/project-slider/ProjectSlider";
import CSSTransition from "react-transition-group/esm/CSSTransition";
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
  const { project, nextProject, prevProject } = props;

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
  function delayNavigation(e, target) {
    e.preventDefault();
    setIsMounted(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      props.history.push(target);
      setIsMounted(true);
    }, 700);
  }

  const width = useViewPortWidth();

  return (
    <ThemeProvider theme={theme}>
      <CSSTransition
        classNames="project"
        timeout={{
          enter: 0,
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
            clickHandler={delayNavigation}
          />
        </Main>
      </CSSTransition>
    </ThemeProvider>
  );
};

ProjectDetails.prototype = {
  project: PropTypes.object.isRequired,
};

export default ProjectDetails;
