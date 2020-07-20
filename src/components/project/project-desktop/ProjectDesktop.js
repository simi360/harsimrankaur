import React from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import Title from "../../text/Title";
import StretchedLink from "../../links/stretched-link/Stretched-link";
import ErrorBoundary from "../../error/ErrorBoundary";
import {
  ProjectContainer,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./ProjectDesktop.styles";

const Project = (props) => {
  return (
    <ErrorBoundary type="project">
      <CSSTransition
        classNames="animate"
        timeout={{
          enter: 800,
          exit: 750,
        }}
        appear={true}
        in={props.isActive}
      >
        <ProjectContainer id={props.slide.id} className="project">
          <ProjectTitle title={props.slide.name}>
            <Title title={props.slide.name} />
          </ProjectTitle>
          <ProjectImg
            imgSrc={`${props.slide.id}/${props.slide.photos.thumb.default}`}
            imgLazy={`${props.slide.id}/${props.slide.photos.thumb.lazy}`}
            imgAlt=""
            effect="blur"
          />
          <ProjectIndex>
            <span>
              {props.slideIndex + 1 >= 10
                ? props.slideIndex + 1
                : `0${props.slideIndex + 1}`}
            </span>
          </ProjectIndex>
          <StretchedLink
            url={`/project/${props.slide.id}`}
            ariaLabel={`See ${props.slide.name} details`}
            srOnly={true}
            isActive={props.isActive}
          />
        </ProjectContainer>
      </CSSTransition>
    </ErrorBoundary>
  );
};

Project.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.object.isRequired,
  }),
  slideIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Project;
