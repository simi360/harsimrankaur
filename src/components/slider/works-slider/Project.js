import React from "react";
import {
  ProjectSection,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./Project.styles";

const Project = (props) => {
  return (
    <ProjectSection title={props.slide.name}>
      <ProjectTitle title={props.slide.name} />
      <ProjectImg
        imgSrc={`../public/${props.slide.photos.thumb.default}`}
        imgAlt=""
      />
      <ProjectIndex>
        {props.slideIndex + 1 >= 10
          ? props.slideIndex + 1
          : `0${props.slideIndex + 1}`}
      </ProjectIndex>
    </ProjectSection>
  );
};

export default Project;
