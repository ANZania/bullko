import React from 'react';
import { NavBar } from './Components/NavBar';
import { Promo } from './Components/Promo';
import { Menu } from './Components/Menu';
import { Footer } from './Components/Footer';
import { GlobalStyle } from './Components/GlobalStyle';


function App() {

  const [openItem, setOpenItem] = React.useState('');

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Promo/>
      <Menu setOpenItem={setOpenItem}/>
      <Footer/>
    </>
  );
};

export default App