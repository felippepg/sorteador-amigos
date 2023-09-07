import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  body, h1, h2, h3, p, ul, li, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Defina outros estilos globais aqui */
  body {
    font-family: Arial, sans-serif;
    /* Adicione outras propriedades de estilo do body aqui */
  }
  
  /* Adicione estilos globais personalizados conforme necessário */

  /* Exemplo: Estilos globais para links */
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
