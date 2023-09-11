import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #B8B8FF;
        --lightPurple: #9381FF;
        --grey: #50514F;
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
`

export default GlobalStyle
