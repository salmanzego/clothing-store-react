import './App.css';
import Home from "./pages/home/Home";
import Test from './pages/Test';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import ShopPage from './pages/shop/ShopPage';
import { Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

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
    </Routes>
  );
}

export default App;
library.add(fab, fas, far);
