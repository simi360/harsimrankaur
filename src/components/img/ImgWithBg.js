import React from "react";
import PropTypes from "prop-types";
import { Img, ImgContainer } from "./ImgWithBg.style";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgBg = (props) => {
  return (
    <ImgContainer className={props.className}>
      <Img
        src={props.imgSrc}
        alt={props.imgAlt}
        placeholderSrc={props.imgLazy}
      />
    </ImgContainer>
  );
};

Img.prototype = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default ImgBg;
