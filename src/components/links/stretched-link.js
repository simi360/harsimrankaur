import React from "react";
import PropTypes from "prop-types";
import LinkTag from "./Stretched-link.styles";

const StretchedLink = React.forwardRef((props, ref) => {
  return <LinkTag to={`/${props.id}`} aria-label={props.ariaLabel} ref={ref} />;
});

//needed for eslint
StretchedLink.displayName = "ImgWithOverflowingBg";

StretchedLink.prototype = {
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default StretchedLink;
