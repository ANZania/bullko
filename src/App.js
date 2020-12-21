import React from 'react';
import { NavBar } from './Components/NavBar';
import { Promo } from './Components/Promo';
import { Menu } from './Components/Menu';
import { Footer } from './Components/Footer';
import { ModalItem } from './Components/ModalItem';
import { Cart } from './Components/Cart';
import { GlobalStyle } from './Components/GlobalStyle';
import { useOpenItem } from './Components/useOpenItem';
import { useCartOpen } from './Components/useCartOpen';


function App() {

  const openItem = useOpenItem();
  const openCart = useCartOpen();

  return (
    <>
      <GlobalStyle/>
      <Cart {...openCart}/>
      <ModalItem {...openItem}/>
      <NavBar {...openCart}/>
      <Promo/>
      <Menu {...openItem}/>
      <Footer/>
    </>
  );
};

export default App