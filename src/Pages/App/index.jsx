import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from '../../Components/Navbar'; // Asegúrate de que el path sea correcto
import Home from '../Home'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />    
      <AppRoutes />
    </BrowserRouter>

  );
}

export default App;
