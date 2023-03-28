import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        line-height: 1;
        box-sizing: border-box;
    }
    
    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['primary-dark']};
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme['gray-800']};
    }

    body, input, text-area, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-100']};
    }

    @keyframes blink {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    @keyframes fade {
      0% {
        opacity: 0;
        transform: translateY(-1rem);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slide-in-blurred-top {
      0% {
        -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
        -webkit-filter: blur(40px);
                filter: blur(40px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        -webkit-filter: blur(0);
                filter: blur(0);
        opacity: 1;
      }
    }
`
