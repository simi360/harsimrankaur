import { css } from "styled-components";

export const FontFaces = css`
  @font-face {
    font-family: "Raleway";
    src: url("./fonts/Raleway-Regular.woff2") format("woff2"),
      url("./fonts/Raleway-Regular.woff") format("woff"),
      url("./fonts/Raleway-Regular.ttf") format("ttf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Bold.woff2") format("woff2"),
      url("./fonts/Poppins-Bold.woff") format("woff"),
      url("./fonts/Poppins-Bold.ttf") format("ttf");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url("./fonts/Poppins-Medium.woff2") format("woff2"),
      url("./fonts/Poppins-Medium.woff") format("woff"),
      url("./fonts/Poppins-Medium.ttf") format("ttf");
    font-weight: 500;
    font-style: normal;
  }
`;
