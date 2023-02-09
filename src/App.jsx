import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Products from './pages/products/products';
import ProductDetail from './pages/productDetail/productDetail';
import FormPay from './pages/formPay/formPay';
import Payment from './pages/payment/payment';
import Login from './pages/login/login';
import CreateProduct from './pages/createProduct/createProduct';
import RequireAuth from './feactures/login/requiereAuth';

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header toggle={toggle} open={open} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:_id" element={<ProductDetail />} />
        <Route path="/form-pay" element={<FormPay />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/create-product"
          element={(
            <RequireAuth>
              <CreateProduct />
            </RequireAuth>
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
