import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Links } from '../pages/Links';
import { Localizacao } from '../pages/Localizacao';
import { Politica } from '../pages/Politica';
import { Contatos } from '../pages/Contatos';

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

