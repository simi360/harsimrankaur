import { css } from "styled-components";

const path = process.env.NODE_ENV === "development" ? "public" : ".";

export const FontFaces = css`
  @font-face {
    font-family: "Raleway";
    src: url("${path}/fonts/Raleway-Regular.woff2") format("woff2"),
      url("${path}/fonts/Raleway-Regular.woff") format("woff"),
      url("${path}/fonts/Raleway-Regular.ttf") format("ttf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("${path}/fonts/Poppins-Bold.woff2") format("woff2"),
      url("${path}/fonts/Poppins-Bold.woff") format("woff"),
      url("${path}/fonts/Poppins-Bold.ttf") format("ttf");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("${path}/fonts/Poppins-Medium.woff2") format("woff2"),
      url("${path}/fonts/Poppins-Medium.woff") format("woff"),
      url("${path}/fonts/Poppins-Medium.ttf") format("ttf");
    font-weight: 500;
    font-style: normal;
  }
`;
