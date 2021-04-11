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
import { useAuth } from "./Components/Hooks/useAuth";
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCp6QWy_Iv3YUZ-ffRt4u0b_gScjz3CjGk",
    authDomain: "bullko-bugers.firebaseapp.com",
    databaseURL: "https://bullko-bugers-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bullko-bugers",
    storageBucket: "bullko-bugers.appspot.com",
    messagingSenderId: "731495543864",
    appId: "1:731495543864:web:6f5c172226104f91b162cd",
    measurementId: "G-1TKV2BWKPQ"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const openCart = useCartOpen();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <Cart {...openCart} {...orders} {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
      <NavBar {...openCart} {...auth}/>
      <Promo/>
      <Menu {...openItem}/>
      <Footer/>
    </>
  )
}

export default App