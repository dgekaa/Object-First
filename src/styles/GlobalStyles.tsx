import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background-subtle);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-light-gray);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-light-gray);
  }

  html {
    scrollbar-width: thin;
    scrollbar-color:var(--color-light-gray) var(--color-background-subtle);
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline:none;
    font-family: inherit;
    cursor: pointer;
  }
`;
