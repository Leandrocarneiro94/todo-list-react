import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #B8B8FF;
    --lightPurple: #9381FF;
    --darkGrey: #50514F;
    --grey: #A1A1A1;
    --lightGrey: #A1A1A1AB;
    --black: #272D2D;
    --white: #F8F7FF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-family: "Inter",sans-serif;
  }

  body {
    background-color: var(--white);
  }
`


export default GlobalStyle
