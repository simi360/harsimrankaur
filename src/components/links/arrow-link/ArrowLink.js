import React from "react";
import PropTypes from "prop-types";
import { LinkTag, ExternalLinkTag, ArrowIcon } from "./ArrowLink.Styles";

const ArrowLink = (props) => {
  if (props.externalLink) {
    return (
      <ExternalLinkTag
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className={props.className}
      >
        {props.linkText}
        <ArrowIcon color={props.color} isReversed={props.isReversed} />
      </ExternalLinkTag>
    );
  }
  return (
    <LinkTag to={props.url} className={props.className}>
      {props.linkText}
      <ArrowIcon color={props.color} isReversed={props.isReversed} />
    </LinkTag>
  );
};

ArrowLink.proptypes = {
  externalLink: PropTypes.bool,
  isReversed: PropTypes.bool,
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ArrowLink;
