import './App.css';
import Home from "./pages/home/Home";
import Test from './pages/Test';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import ShopPage from './pages/shop/ShopPage';
import Cart from './pages/cart/Cart';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/t-shirts" element={<Home />} />
      <Route path="/hoodies" element={<Home />} />
      <Route path="/sweaters" element={<Home />} />
      <Route path="/pants" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
