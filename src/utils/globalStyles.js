import { createGlobalStyle } from "styled-components";
import { FontFaces } from "./fonts";

//COLORS

export const primary = "#EA6616";
export const primaryLight = "#FFBC93";
export const secondar = "#260914";
export const dark = "#2F2E2E";

//FONTS
export const raleway = "'Raleway', 'Roboto', Helvetica, Arial, sans-serif";
export const poppins = "'Poppins', 'Roboto', Helvetica, Arial, sans-serif";

export const GlobalStyle = createGlobalStyle`
    ${FontFaces}

    html {
        font-size: 16px;
    }

    body {
        width: 100%;
        overflow-x: hidden;
        font-family: ${raleway};
        color: ${dark};
    }
`;
