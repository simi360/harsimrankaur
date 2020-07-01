import React from "react";
import PropTypes from "prop-types";
import { ExternalLinkTag } from "./Stretched-link.styles";

const ExternalStretchedLink = (props) => {
  return (
    <ExternalLinkTag
      href={props.url}
      aria-label={props.ariaLabel}
      target="_blank"
      rel="noreferrer"
    />
  );
};

ExternalStretchedLink.prototype = {
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default ExternalStretchedLink;
