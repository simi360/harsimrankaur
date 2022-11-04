import React from "react";
import PropTypes from "prop-types";
import { Img, ImgContainer } from "./ImgWithBg.style";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgBg = (props) => {
  return (
    <ImgContainer
      className={props.className}
      //key needed to avoid old image keeping on showing after changing the image src
      key={props.imgSrc}
    >
      <Img
        src={ process.env.PUBLIC_URL+`/img/${props.imgSrc}`
          // process.env.NODE_ENV === "development"
          //   ? `public/img/${props.imgSrc}`
          //   : `./img/${props.imgSrc}`
        }
        alt={props.imgAlt}
        placeholderSrc={process.env.PUBLIC_URL+`/img/${props.imgLazy}`
          // process.env.NODE_ENV === "development"
          //   ? `public/img/${props.imgLazy}`
          //   : `./img/${props.imgLazy}`
        }
      />
    </ImgContainer>
  );
};

ImgBg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgLazy: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
 };

export default ImgBg;
