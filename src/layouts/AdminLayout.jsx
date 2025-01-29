import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/admin">Administración de Usuarios</Link></li>
            <li><Link to="/admin/products">Administración de Productos</Link></li>
            <li><Link to="/admin/categories">Administración de Categorías</Link></li>
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

export default AdminLayout;