import React from "react";
import { ImgContainer, Img } from "./ImgWithOverflowinBg.style";

const ImgWithOverflowingBg = (props) => {
  return (
    <ImgContainer className={props.className}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
    </ImgContainer>
  );
};

export default ImgWithOverflowingBg;
