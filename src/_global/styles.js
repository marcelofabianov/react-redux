import { createGlobalStyle } from "styled-components";

import "normalize.css";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }
    h1, h2, h3, h4, h5{
        margin: 0;
        padding: 0
    }
    body, html {
        background: #eee;
        font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;
