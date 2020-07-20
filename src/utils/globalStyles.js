import { createGlobalStyle } from "styled-components";
import { FontFaces } from "./fonts";

export const GlobalStyle = createGlobalStyle`
    ${FontFaces}

    * {
        box-sizing: border-box;
    }

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

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        text-align: left;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    a {
        font-family: ${(p) => p.theme.font.poppins};
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    button {
        border: none;
        background: none;
        color: ${(p) => p.theme.color.primary};
    }

    .read-only {
        visibility: hidden;
        position: absolute;
        top: 0;
    }
`;
