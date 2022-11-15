import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: none;
} 
body {
    background: #FFF3D6;
    color: #390512;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Urbanist', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    .Title {
        font-family: "Comic Sans MS", "Comic Sans", cursive;
    }
}
`;
