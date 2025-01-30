import { useAuth } from '../hooks/useAuth';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { AuthGuard } from '../guards/AuthGuard';
import AdminLayout from '../layouts/AdminLayout';  
import Page404 from '../views/Page404';  
import Cart from '../views/Cart';  
import Home from '../views/Home';  
import Login from '../views/Login';  
import Profile from '../views/Profile';  
import Register from '../views/Register';  
import Gallery from '../views/Gallery';  
import Detail from '../views/Detail';  
import UserManagement from '../views/PrivateViews/UserManagement';  
import ProductManagement from '../views/PrivateViews/ProductManagement';  
import CategoryManagement from '../views/PrivateViews/CategoryManagement';  
import SupplierOrders from '../views/PrivateViews/SupplierOrders';  
import CustomerOrders from '../views/PrivateViews/CustomerOrders';  
import LowStockProducts from '../views/PrivateViews/LowStockProducts';  
import IncompleteOrders from '../views/PrivateViews/IncompleteOrders';  
import CreatePost from '../views/PrivateViews/CreatePost';  
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
            <Route path="/cart" element={<AuthGuard redirectTo="/login" isAllow={session?.role === ROLES.CLIENTE}><Cart /></AuthGuard>} />
            <Route path="/profile" element={<AuthGuard redirectTo="/login" isAllow={session?.token}><Profile /></AuthGuard>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/detail/:id" element={<Detail />} />
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