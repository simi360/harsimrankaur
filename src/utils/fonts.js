import { css } from "styled-components";

import RalewayWoff2 from "../assets/fonts/Raleway-Regular.woff2";
import RalewayWoff from "../assets/fonts/Raleway-Regular.woff";
import RalewayTtf from "../assets/fonts/Raleway-Regular.ttf";

import PoppinsBoldWoff2 from "../assets/fonts/Poppins-Bold.woff2";
import PoppinsBoldWoff from "../assets/fonts/Poppins-Bold.woff";
import PoppinsBoldTtf from "../assets/fonts/Poppins-Bold.ttf";

import PoppinsWoff2 from "../assets/fonts/Poppins-Medium.woff2";
import PoppinsWoff from "../assets/fonts/Poppins-Medium.woff";
import PoppinsTtf from "../assets/fonts/Poppins-Medium.ttf";

export const FontFaces = css`
  @font-face {
    font-family: "Raleway";
    src: url(${RalewayWoff2}) format("woff2"),
      url(${RalewayWoff}) format("woff"), url(${RalewayTtf}) format("ttf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsBoldWoff2}) format("woff2"),
      url(${PoppinsBoldWoff}) format("woff"),
      url(${PoppinsBoldTtf}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsWoff2}) format("woff2"),
      url(${PoppinsWoff}) format("woff"), url(${PoppinsTtf}) format("ttf");
    font-weight: 500;
    font-style: normal;
  }
`;
