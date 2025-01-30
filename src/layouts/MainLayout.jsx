import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation'; // Asegúrate de que la ruta sea correcta
import Hero from '../components/Hero'; // Asegúrate de que la ruta sea correcta
import RecentPosts from '../components/RecentPosts'; // Asegúrate de que la ruta sea correcta
import ProductGallery from '../components/ProductGallery'; // Asegúrate de que la ruta sea correcta

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <RecentPosts />
      <ProductGallery />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 PetsCare. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MainLayout;