import React from "react";
import PropTypes from "prop-types";
import { ExternalLinkTag, LinkTag } from "./Stretched-link.styles";

const StretchedLink = (props) => {
  if (props.externalLink) {
    return (
      <ExternalLinkTag
        href={props.url}
        aria-label={props.ariaLabel}
        target="_blank"
        rel="noreferrer"
      />
    );
  }
  return <LinkTag to={props.url} aria-label={props.ariaLabel} />;
};

StretchedLink.prototype = {
  externalLink: PropTypes.bool,
  url: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default StretchedLink;
