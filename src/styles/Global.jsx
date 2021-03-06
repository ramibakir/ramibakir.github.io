import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif
}

html {
    font-size: 1rem;
}

body {
    h1 {
        font-size: 4rem;
        color: #17252a;
    }
    h2 {
        font-size: 2.8rem;
    }
    h3 {
        font-size: 2.3rem;
        color: #17252a;
    }
    h4 {
        font-size: 2rem;
    }
    p {
        font-size: 1.6rem;
        color: #17252a;
    }
    //background-color: #c09f80;
    background-color: #3aafa9;
}
${normalize}
`;

export { GlobalStyles };
