import React from "react";
import LinkTag from "./stretched-link.styles";

const StretchedLink = (props) => (
  <LinkTag to={`/${props.id}`} aria-label={props.ariaLabel} />
);

export default StretchedLink;
