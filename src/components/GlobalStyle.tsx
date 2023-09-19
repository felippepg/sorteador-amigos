import { createGlobalStyle } from 'styled-components';
import px2vw from '../helpers/px2vw';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
  /* Reset CSS */
  /* body, h1, h2, h3, p, ul, li, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  } */

  /* Defina outros estilos globais aqui */
  /* body {
    font-family: Arial, sans-serif;
  }
   */
  /* Adicione estilos globais personalizados conforme necessário */

  /* Exemplo: Estilos globais para links */
  /* a {
    text-decoration: none;
    color: inherit;
  } */
`;

export default GlobalStyles;
