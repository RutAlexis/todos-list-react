import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    .subheader {
    margin: 5px 50px;
    }

    body {
    font-family: Open Sans, sans-serif;
    background: #eee;
    }
`;