import React from "react";
import PropTypes from "prop-types";
import { LinkTag } from "./Stretched-link.styles";

const StretchedLink = React.forwardRef((props, ref) => {
  return <LinkTag to={props.url} aria-label={props.ariaLabel} ref={ref} />;
});

//needed for eslint
StretchedLink.displayName = "ImgWithOverflowingBg";

StretchedLink.prototype = {
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default StretchedLink;
