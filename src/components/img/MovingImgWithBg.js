import React from "react";
import PropTypes from "prop-types";
import { Img, ImgContainer, BgContainer } from "./MovingImgWithBg.styles";

//isMobile is needed to adapt the styles and animations when the image is a mobile design

const MovingImgWithBg = (props) => {
  return (
    <BgContainer className={props.className} isMobile={props.isMobile}>
      <ImgContainer isMobile={props.isMobile}>
        <Img
          src={props.imgSrc}
          alt={props.imgAlt}
          isActive={props.isActive}
          isMobile={props.isMobile}
        />
      </ImgContainer>
    </BgContainer>
  );
};

MovingImgWithBg.prototype = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default MovingImgWithBg;
