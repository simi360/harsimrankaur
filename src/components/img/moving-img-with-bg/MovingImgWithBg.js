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
    <BgContainer
      className={props.className}
      isMobile={props.isMobile}
      //key needed to avoid old image keeping on showing after changing the image src
      key={props.imgSrc}
    >
      <ImgContainer isMobile={props.isMobile} isActive={props.isActive}>
        <LazyLoadImage
          src={
            process.env.NODE_ENV === "development"
              ? `public/img/${props.imgSrc}`
              : `./img/${props.imgSrc}`
          }
          alt={props.imgAlt}
          effect="blur"
        />

        <PlaceHolder>
          {/* Needed to have an height with the vertical slider */}
          <img
            src={
              process.env.NODE_ENV === "development"
                ? `public/img/${props.imgLazy}`
                : `./img/${props.imgLazy}`
            }
            alt=""
          />
        </PlaceHolder>
      </ImgContainer>
    </BgContainer>
  );
};

MovingImgWithBg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgLazy: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default MovingImgWithBg;
