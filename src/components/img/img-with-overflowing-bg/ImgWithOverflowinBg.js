import React from "react";
import PropTypes from "prop-types";
import { ImgContainer, Img } from "./ImgWithOverflowinBg.style";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgWithOverflowingBg = (props) => {
  return (
    <ImgContainer
      className={props.className}
      //key needed to avoid old image keeping on showing after changing the image src
      key={props.imgSrc}
    >
      <Img
        src={
          process.env.NODE_ENV === "development"
            ? `public/img/${props.imgSrc}`
            : `./img/${props.imgSrc}`
        }
        alt={props.imgAlt}
        placeholderSrc={
          process.env.NODE_ENV === "development"
            ? `public/img/${props.imgLazy}`
            : `./img/${props.imgLazy}`
        }
      />
    </ImgContainer>
  );
};

ImgWithOverflowingBg.propTypes = {
  className: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgLazy: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default ImgWithOverflowingBg;
