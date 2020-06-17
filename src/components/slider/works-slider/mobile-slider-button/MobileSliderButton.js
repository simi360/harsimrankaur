import React from "react";
import PropTypes from "prop-types";
import Arrow from "../../../icons/Arrow";

const MobileSliderButton = ({
  onClickHandler,
  hasFollowingSLide,
  label,
  isPrev,
  colors,
}) => (
  <button
    type="button"
    onClick={onClickHandler}
    title={label}
    className={`control-arrow ${isPrev ? "control-prev" : "control-next"} ${
      hasFollowingSLide ? "" : "control-disabled"
    }`}
  >
    <Arrow colors={colors} />
  </button>
);

MobileSliderButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  hasFollowingSLide: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  isPrev: PropTypes.bool.isRequired,
  colors: PropTypes.object.isRequired,
};

export default MobileSliderButton;
