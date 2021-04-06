import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');    
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --rocketseat:#7159c1;
    --background:#ecf1f0;
    --text-color:#333;
  }
  
  html, body, #root{
      height: 100%;
  }
  
  body {
    font: 14px 'Roboto', sans-serif;
    background: var(--background);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased!important;
  }
  
  ul{
    list-style: none;
  }
`