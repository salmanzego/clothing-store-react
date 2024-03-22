import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import ShopPage from './pages/shop/ShopPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import Test from './pages/Test';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/test",
        element: <Test />,
    },

]);



export default router;