import React from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-transition-group/esm/CSSTransition";
import Title from "../../text/Title";
import StretchedLink from "../../links/stretched-link/Stretched-link";
import {
  ProjectContainer,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./ProjectDesktop.styles";

const Project = (props) => {
  return (
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
          imgSrc={
            process.env.NODE_ENV === "development"
              ? `src/assets/img/${props.slide.id}/${props.slide.photos.thumb.default}`
              : `./img/${props.slide.photos.thumb.default}`
          }
          imgLazy={
            process.env.NODE_ENV === "development"
              ? `src/assets/img/${props.slide.id}/${props.slide.photos.thumb.lazy}`
              : `./img/${props.slide.photos.thumb.lazy}`
          }
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
  );
};

Project.propTypes = {
  slide: PropTypes.object.isRequired,
  slideIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Project;
