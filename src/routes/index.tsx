import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mesas from '../pages/mesas';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import MesaCard from '../components/MesaCards';

const AppRoutes = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/mesas" element={<Mesas />} />
      </Routes>
    
    </>
   
  );
}

export default AppRoutes;
