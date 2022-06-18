import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body::-webkit-scrollbar {
width: 12px;
}
    *, *::after, *::before {
      margin: 0;
      outline: none;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif !important;
    }


    html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    body{
      font-family: 'Poppins', sans-serif !important;
      font-size: calc(14px + .5vw);
      background:#2D2D2D};
      
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height:100vh;
      margin: 0;
      padding: 0;
      padding-bottom: 100px;
    }
    a{
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

  label {
    color: var(--text-default-color) !important;
    font-size: 0.875rem !important;
  }


  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 0 !important;
  }

  nav,
  li {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2 !important;
  }


  .flex-container::after {
    content: "";
    flex: auto;
  }
  
  div,input:focus{
    outline: none;
}

`;
