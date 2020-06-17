import React from "react";
import PropTypes from "prop-types";
import TitleTag from "./Title.style";

const Title = (props) => {
  return <TitleTag className={props.className}>{props.title}</TitleTag>;
};

Title.prototype = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
