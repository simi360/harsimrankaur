import React from "react";
import PropTypes from "prop-types";
import Arrow from "../../icons/Arrow";
import SliderButtonStyles from "./SliderButton.styles";

const SliderButton = ({
  onClickHandler,
  hasFollowingSlide,
  label,
  isPrev,
  colors,
}) => {
  let enableArrow =
    typeof hasFollowingSlide == "boolean"
      ? hasFollowingSlide
      : hasFollowingSlide(isPrev);

  return (
    <SliderButtonStyles
      type="button"
      onClick={onClickHandler}
      title={label}
      className={`control-arrow ${isPrev ? "control-prev" : "control-next"} ${
        enableArrow ? "" : "control-disabled"
      }`}
    >
      <Arrow colors={colors} />
    </SliderButtonStyles>
  );
};

SliderButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  hasFollowingSlide: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  label: PropTypes.string.isRequired,
  isPrev: PropTypes.bool.isRequired,
  colors: PropTypes.object.isRequired,
};

export default SliderButton;
