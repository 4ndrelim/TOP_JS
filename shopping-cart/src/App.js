import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
