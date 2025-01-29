import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation'; // Asegúrate de que la ruta sea correcta

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;