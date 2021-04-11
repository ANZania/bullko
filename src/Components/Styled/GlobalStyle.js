import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #CACACA;
  font-family: Ubuntu, sans-serif;
  font-size: 20px;
  color: black
}

img {
  max-width: 100%;
  height: auto;
  background-size: cover;
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

.order-name {
  width: 50%;
}

.order-count {
  width: 20%;
  text-align: center;
}

.order-price {
  width: auto;
  min-width: 30%;
  flex-grow: 1;
  text-align: right;
}
`;