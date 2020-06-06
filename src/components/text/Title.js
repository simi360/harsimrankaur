import React from "react";
import TitleTag from "./Title.style";

const Title = (props) => {
  return <TitleTag className={props.className}>{props.title}</TitleTag>;
};

export default Title;
