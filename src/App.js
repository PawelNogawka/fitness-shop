import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from './pages/home/Home'
import ProductDetails from "./pages/productDetails/ProductDetails";
import CategoriesList from './pages/categoryList/CategoriesList';
import Register from "./pages/register/Register";
import Login from './pages/login/Login'
import SearchPage from "./pages/search/SearchPage";
import Cart from "./pages/cart/Cart";
import OrderSummary from './pages/orderSummary/OrderSummary'
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./componets/Footer";

import Navbar from "./componets/Navbar";

function App() {
  const {user} = useAuthContext()
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/:slug' element={<ProductDetails />} />
        <Route path='/categories/:slug' element={<CategoriesList />} />
        <Route path='/auth/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path='/auth/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/products/search/:searchTerm' element={<SearchPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
