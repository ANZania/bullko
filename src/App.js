import React from 'react';
import { NavBar } from './Components/NavBar';
import { Promo } from './Components/Promo';
import { Menu } from './Components/Menu';
import { Footer } from './Components/Footer';
import { ModalItem } from './Components/ModalItem';
import { Cart } from './Components/Cart';
import { GlobalStyle } from './Components/GlobalStyle';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useCartOpen } from './Components/Hooks/useCartOpen';
import { useOrders } from './Components/Hooks/useOrders';


function App() {

  const openItem = useOpenItem();
  const openCart = useCartOpen();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <Cart {...openCart} {...orders}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
      <NavBar {...openCart}/>
      <Promo/>
      <Menu {...openItem}/>
      <Footer/>
    </>
  );
};

export default App