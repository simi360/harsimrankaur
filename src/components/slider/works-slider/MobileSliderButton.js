import React from "react";
import Arrow from "../../icons/Arrow";

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

export default MobileSliderButton;
