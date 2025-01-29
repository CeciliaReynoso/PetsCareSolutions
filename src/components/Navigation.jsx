import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import RolesContext from '../context/RolesContext';
import { ROLES } from '../helpers/roles';
import '../App.css'; // Asegúrate de que la ruta sea correcta

const Navigation = () => {
  const navigate = useNavigate();
  const { session, logout } = useAuth();
  const { cargo, setCargo } = useContext(RolesContext);

  const handleLogout = () => {
    logout();
    setCargo(null);
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('email');
    navigate('/');
  };

  const isLogin = () => {
    if (session?.token) {
      return (
        <>
          <Link to='/profile' className='btn m-1 btn-light'>Mi Perfil</Link>
          <button onClick={handleLogout} className='btn btn-danger'>Salir</button>
        </>
      );
    } else {
      return (
        <>
          <Link to='/login' className='btn m-1 btn-light login-btn'>Inicio de sesión</Link>
          <Link to='/register' className='btn m-1 btn-light register-btn'>Registro</Link>
        </>
      );
    }
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand logo' to='/'>PetsCare</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse opciones' id='navbarNav'>
          <div className='navbar-nav me-auto mb-2 mb-lg-0'>
            <span className='nav-item me-3'>
              <Link className='nav-link' to='/'>Inicio<i className='fa-solid fa-house ms-2' /></Link>
            </span>
            {cargo === ROLES.CLIENTE && (
              <span className='nav-item me-3'>
                <Link className='nav-link' to='/cart'>Carrito de compras</Link>
              </span>
            )}
            <span className='nav-item me-3'>
              <Link className='nav-link' to='/create-post'>Crear Publicación</Link>
            </span>
            <span className='nav-item me-3'>
              <Link className='nav-link' to='/post-gallery'>Galería de Publicaciones</Link>
            </span>
            <span className='nav-item me-3'>
              <Link className='nav-link' to='/post-detail'>Detalle de Publicación</Link>
            </span>
            {cargo === ROLES.ADMIN && (
              <>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/admin'>Administración de Usuarios</Link>
                </span>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/admin/products'>Administración de Productos</Link>
                </span>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/admin/categories'>Administración de Categorías</Link>
                </span>
              </>
            )}
            {cargo === ROLES.COMPRADOR && (
              <>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/buyer'>Gestión de Pedidos a Proveedor</Link>
                </span>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/buyer/low-stock-products'>Listado de Productos con Stock Mínimo</Link>
                </span>
              </>
            )}
            {cargo === ROLES.VENDEDOR && (
              <>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/seller'>Gestión de Pedidos de Cliente</Link>
                </span>
                <span className='nav-item me-3'>
                  <Link className='nav-link' to='/seller/incomplete-orders'>Listado de Pedidos No Completados</Link>
                </span>
              </>
            )}
          </div>
          <div className='d-flex'>
            {isLogin()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;