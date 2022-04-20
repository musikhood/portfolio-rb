import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #857cff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #0a0b10;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: #857cff6b;
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }
    html{
        scrollbar-width: thin;
        scrollbar-color: var( --font-dark-color) var(--background-dark-color);
    }

    html::-webkit-scrollbar{
        width: .5vw;
    }

    html::-webkit-scrollbar-thumb{
        background-color: var( --font-dark-color);
    }
    html::-webkit-scrollbar-track{
        background-color: var(--background-dark-color);
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1rem
    }

    h1{
        font-size: 4rem;
        color: var(--white-color);
    }
    span{
        font-size: inherit;
        color: var(--primary-color);
    }
    .ham-burger-menu{
        display: none;
    }
    .nav-toggle{
        transform: translateX(0);
    }
    @media screen and (max-width: 1200px) {
    .ham-burger-menu{
        display: block;
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 5000;
        cursor: pointer;
        svg{
            font-size: 2.5rem;
        }
    }
}


`;

export default GlobalStyle;
