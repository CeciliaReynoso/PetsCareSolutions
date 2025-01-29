import { useAuth } from '../hooks/useAuth';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AuthGuard } from '../guards/AuthGuard';
import { AdminLayout } from '../layouts/AdminLayout';
import { Page404 } from '../views/Page404';
import { Cart } from '../views/CartPage';
import { Checkout } from '../views/CheckoutPage';
import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { Profile } from '../views/Profile';
import { Dashboard } from '../views/DashboardPage';
import { Register } from '../views/Register';
import { SuccessPage } from '../views/SuccessPage';
import { ROLES } from '../helpers/roles';

export const RouterManager = () => {
	const { session } = useAuth();
	console.log(session, 'User session');
	console.log(!session?.token, 'condicion');

	return (
		<Router>
			<Routes>
				<Route
					path="*"
					element={<Page404 />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>

				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						index
						element={<Home />}
					/>

					<Route
						path="/cart"
						element={<Cart />}
					/>

					<Route
						path="/checkout"
						element={<CheckoutPage />}
					/>

					<Route
						path="/success"
						element={<SuccessPage />}
					/>

					<Route
						path="/profile"
						element={
							<AuthGuard
								redirectTo="/login"
								isAllow={session?.token}
							/>
						}
					>
						<Route
							index
							element={<Profile />}
						/>
					</Route>
				</Route>

				<Route
					path="/admin"
					element={
						<AuthGuard
							redirectTo="/profile"
							isAllow={session?.role == ROLES.ADMIN}
						>
							<AdminLayout />
						</AuthGuard>
					}
				>
					<Route
						index
						element={<DashboardPage />}
					/>

					<Route
						path="/admin/products"
						element={<p>Admin Products</p>}
					/>
				</Route>
			</Routes>
		</Router>
	);
};
