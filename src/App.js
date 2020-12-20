import React from 'react';
import { NavBar } from './Components/NavBar';
import { Promo } from './Components/Promo';
import { Menu } from './Components/Menu';
import { Footer } from './Components/Footer';
import { ModalItem } from './Components/ModalItem';
import { Cart } from './Components/Cart';
import { GlobalStyle } from './Components/GlobalStyle';


function App() {

  const [openItem, setOpenItem] = React.useState(null);
  const [isCartOpened, setCartOpened] = React.useState(null);
  const [scrollPosition, setScrollPosition] = React.useState(null);

  return (
    <>
      <GlobalStyle/>
      <Cart isCartOpened={isCartOpened} setCartOpened={setCartOpened}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
      <NavBar scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} setCartOpened={setCartOpened}/>
      <Promo/>
      <Menu setOpenItem={setOpenItem}/>
      <Footer/>
    </>
  );
};

export default App