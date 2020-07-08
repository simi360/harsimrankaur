import React from "react";
import PropTypes from "prop-types";
import { ImgContainer, Img } from "./ImgWithOverflowinBg.style";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgWithOverflowingBg = (props) => {
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

ImgContainer.prototype = {
  className: PropTypes.string.isRequired,
};

Img.prototype = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default ImgWithOverflowingBg;
