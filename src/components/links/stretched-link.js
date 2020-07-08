import React from "react";
import PropTypes from "prop-types";
import { LinkTag } from "./Stretched-link.styles";

const StretchedLink = (props) => {
  return <LinkTag to={props.url} aria-label={props.ariaLabel} />;
};

StretchedLink.prototype = {
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default StretchedLink;
