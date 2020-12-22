import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { Promo } from './Components/Menu/Promo';
import { Menu } from './Components/Menu/Menu';
import { Footer } from './Components/Footer/Footer';
import { ModalItem } from './Components/Modal/ModalItem';
import { Cart } from './Components/Modal/Cart';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
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