import { createGlobalStyle } from "styled-components";
import { FontFaces } from "./fonts";

export const GlobalStyle = createGlobalStyle`
    ${FontFaces}

    html {
        font-size: 16px;
    }

    body {
        width: 100%;
        overflow-x: hidden;
        font-family: ${(p) => p.theme.font.raleway};
        color: ${(p) => p.theme.color.dark};
        font-size: 1rem;
    }

    a {
        font-family: ${(p) => p.theme.font.poppins};
    }
`;
