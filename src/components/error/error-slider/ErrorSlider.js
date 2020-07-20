import React from "react";
import { Div, Icon } from "./ErrorSlider.styles";

const ErrorSlider = () => {
  return (
    <Div className="error-slider">
      <div>
        <Icon color="white" />
        <p>Oops, something went wrong with the slider</p>
      </div>
    </Div>
  );
};

export default ErrorSlider;
