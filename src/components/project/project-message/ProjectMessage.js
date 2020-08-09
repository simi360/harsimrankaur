import React from "react";
import PropTypes from "prop-types";
import { Div } from "./ProjectMessage.styles";

const ProjectMessage = (props) => {
  return (
    <Div className={props.className}>
      <div>{props.children}</div>
    </Div>
  );
};

ProjectMessage.propTypes = {
  className: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default ProjectMessage;
