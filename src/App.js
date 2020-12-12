import React from 'react';
import { NavBar } from './Components/NavBar';
import { Promo } from './Components/Promo';
import { Menu } from './Components/Menu';
import { Footer } from './Components/Footer';
import { ModalItem } from './Components/ModalItem';
import { GlobalStyle } from './Components/GlobalStyle';


function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <>
      <GlobalStyle/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
      <NavBar/>
      <Promo/>
      <Menu setOpenItem={setOpenItem}/>
      <Footer/>
    </>
  );
};

export default App