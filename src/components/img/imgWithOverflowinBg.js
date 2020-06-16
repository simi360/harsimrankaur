import React from "react";
import { ImgContainer, Img } from "./ImgWithOverflowinBg.style";

const ImgWithOverflowingBg = React.forwardRef((props, ref) => {
  return (
    <ImgContainer className={props.className} ref={ref}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
    </ImgContainer>
  );
});
//needed for eslint
ImgWithOverflowingBg.displayName = "ImgWithOverflowingBg";

export default ImgWithOverflowingBg;
