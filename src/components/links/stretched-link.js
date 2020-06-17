import React from "react";
import PropTypes from "prop-types";
import LinkTag from "./stretched-link.styles";

const StretchedLink = (props) => (
  <LinkTag to={`/${props.id}`} aria-label={props.ariaLabel} />
);

StretchedLink.prototype = {
  id: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default StretchedLink;
