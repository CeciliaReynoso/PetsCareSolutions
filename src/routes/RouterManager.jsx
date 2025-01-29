import { useAuth } from '../hooks/useAuth';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import  MainLayout  from '../layouts/MainLayout';
import { AuthGuard } from '../guards/AuthGuard';
import AdminLayout from '../layouts/AdminLayout'; // Asegúrate de que la ruta sea correcta
import Page404 from '../views/Page404'; // Asegúrate de que la ruta sea correcta
import Cart from '../views/Cart'; // Asegúrate de que la ruta sea correcta
import Home from '../views/Home'; // Asegúrate de que la ruta sea correcta
import Login from '../views/Login'; // Asegúrate de que la ruta sea correcta
import Profile from '../views/Profile'; // Asegúrate de que la ruta sea correcta
import Register from '../views/Register'; // Asegúrate de que la ruta sea correcta
import Gallery from '../views/Gallery'; // Asegúrate de que la ruta sea correcta
import Detail from '../views/Detail'; // Asegúrate de que la ruta sea correcta
import UserManagement from '../views/PrivateViews/UserManagement'; // Asegúrate de que la ruta sea correcta
import ProductManagement from '../views/PrivateViews/ProductManagement'; // Asegúrate de que la ruta sea correcta
import CategoryManagement from '../views/PrivateViews/CategoryManagement'; // Asegúrate de que la ruta sea correcta
import SupplierOrders from '../views/PrivateViews/SupplierOrders'; // Asegúrate de que la ruta sea correcta
import CustomerOrders from '../views/PrivateViews/CustomerOrders'; // Asegúrate de que la ruta sea correcta
import LowStockProducts from '../views/PrivateViews/LowStockProducts'; // Asegúrate de que la ruta sea correcta
import IncompleteOrders from '../views/PrivateViews/IncompleteOrders'; // Asegúrate de que la ruta sea correcta
import CreatePost from '../views/PrivateViews/CreatePost'; // Asegúrate de que la ruta sea correcta
import { ROLES } from '../helpers/roles';
import { RolesProvider } from '../context/RolesContext';

export const RouterManager = () => {
  const { session } = useAuth();

  return (
    <RolesProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<AuthGuard redirectTo="/login" isAllow={session?.token}><Profile /></AuthGuard>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/detail" element={<Detail />} />
          </Route>

          <Route path="/admin" element={<AuthGuard redirectTo="/profile" isAllow={session?.role === ROLES.ADMIN}><AdminLayout /></AuthGuard>}>
            <Route index element={<UserManagement />} />
            <Route path="/admin/products" element={<ProductManagement />} />
            <Route path="/admin/categories" element={<CategoryManagement />} />
            <Route path="/admin/create-post" element={<CreatePost />} />
          </Route>

          <Route path="/buyer" element={<AuthGuard redirectTo="/profile" isAllow={session?.role === ROLES.BUYER}><MainLayout /></AuthGuard>}>
            <Route index element={<SupplierOrders />} />
            <Route path="/buyer/low-stock-products" element={<LowStockProducts />} />
          </Route>

          <Route path="/seller" element={<AuthGuard redirectTo="/profile" isAllow={session?.role === ROLES.SELLER}><MainLayout /></AuthGuard>}>
            <Route index element={<CustomerOrders />} />
            <Route path="/seller/incomplete-orders" element={<IncompleteOrders />} />
          </Route>
        </Routes>
      </Router>
    </RolesProvider>
  );
};