import React from "react";
import PropTypes from "prop-types";
import StretchedLink from "../../links/stretched-link/Stretched-link";
import Title from "../../text/Title";
import ErrorBoundary from "../../error/ErrorBoundary";
import {
  ProjectSection,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./ProjectMobile.styles";

const Project = (props) => {
  return (
    <ErrorBoundary type="project">
      <ProjectSection
        title={props.slide.name}
        className={props.className + " project"}
      >
        <ProjectTitle title={props.slide.name}>
          <Title title={props.slide.name} />
        </ProjectTitle>
        <ProjectImg
          imgSrc={`${props.slide.id}/${props.slide.photos.thumb.default}`}
          imgLazy={`${props.slide.id}/${props.slide.photos.thumb.lazy}`}
          imgAlt=""
        />
        <ProjectIndex>
          {props.slideIndex + 1 >= 10
            ? props.slideIndex + 1
            : `0${props.slideIndex + 1}`}
        </ProjectIndex>
        <StretchedLink
          url={`/project/${props.slide.id}`}
          ariaLabel={`See ${props.slide.name} details`}
          srOnly={true}
        />
      </ProjectSection>
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
};

export default Project;
