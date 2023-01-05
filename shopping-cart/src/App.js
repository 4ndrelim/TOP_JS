import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
