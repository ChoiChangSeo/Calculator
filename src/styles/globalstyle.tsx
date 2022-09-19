import { Global, css } from "@emotion/react";

const style = css`
  * {
    font-family: Arial, Helvetica, sans-serif !important;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  html,
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 1400px;
  }
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};
export default GlobalStyle;
