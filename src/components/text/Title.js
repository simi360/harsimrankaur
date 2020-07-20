import React from "react";
import PropTypes from "prop-types";
import TitleTag from "./Title.style";

const Title = (props) => {
  return (
    <TitleTag className={props.className}>
      <span className="title-span">{props.title}</span>
    </TitleTag>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
