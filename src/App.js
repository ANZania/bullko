import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';
import { Promo } from './Components/Promo';
import { Menu } from './Components/Menu';
import { Footer } from './Components/Footer';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #CACACA;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black
  }
  img {
    max-width: 100%;
    height: auto;
  }

  a {
    next-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, p {
    padding: 0;
    margin: 0;

  }

  .promoImg {
    width: 100%;
    height: auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Promo/>
      <Menu/>
      <Footer/>
    </>
  );
};

export default App