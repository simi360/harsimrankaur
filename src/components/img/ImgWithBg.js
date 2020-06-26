import React from "react";
import PropTypes from "prop-types";
import { Img, ImgContainer } from "./ImgWithBg.style";

const ImgBg = (props) => {
  return (
    <ImgContainer className={props.className}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
    </ImgContainer>
  );
};

Img.prototype = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default ImgBg;
