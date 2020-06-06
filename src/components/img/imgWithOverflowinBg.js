import React from "react";
import { ImgContainer, Img } from "./imgWithOverflowinBg.style";

const ImgWithOverflowingBg = (props) => {
  return (
    <ImgContainer className={props.className}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
    </ImgContainer>
  );
};

export default ImgWithOverflowingBg;
