import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  ImgContainer,
  BgContainer,
  PlaceHolder,
} from "./MovingImgWithBg.styles";
import "react-lazy-load-image-component/src/effects/blur.css";

//isMobile is needed to adapt the styles and animations when the image is a mobile design

const MovingImgWithBg = (props) => {
  return (
    <BgContainer className={props.className} isMobile={props.isMobile}>
      <ImgContainer isMobile={props.isMobile} isActive={props.isActive}>
        <LazyLoadImage src={props.imgSrc} alt={props.imgAlt} effect="blur" />
        {/* Needed to have an height with the vertical slider */}
        <PlaceHolder>
          <img src={props.imgLazy} alt="" />
        </PlaceHolder>
      </ImgContainer>
    </BgContainer>
  );
};

MovingImgWithBg.prototype = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default MovingImgWithBg;
