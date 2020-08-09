import React from "react";
import ProjectMessage from "../../project/project-message/ProjectMessage";
import { Icon } from "./ErrorSlider.styles";

const ErrorSlider = () => {
  return (
    <ProjectMessage className="error-slider">
      <Icon color="white" />
      <p>Oops, something went wrong with the slider</p>
    </ProjectMessage>
  );
};

export default ErrorSlider;
