import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/register">Registro</Link></li>
            <li><Link to="/login">Inicio de sesión</Link></li>
            <li><Link to="/profile">Mi perfil</Link></li>
            <li><Link to="/cart">Carrito de compras</Link></li>
          </ul>
        </nav>
      </header>
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