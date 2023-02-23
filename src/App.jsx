import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import FeetPage from './components/feetPage/feetPage';
import Home from './pages/home/home';
import Products from './pages/products/products';
import ProductDetail from './pages/productDetail/productDetail';
import FormPay from './pages/formPay/formPay';
import Payment from './pages/payment/payment';
import Login from './pages/login/login';
import CreateProduct from './pages/createProduct/createProduct';
import RequireAuth from './feactures/login/requiereAuth';
import Signup from './pages/Signup/Signup';
import Profile from './pages/profile/profile';

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
      <section className="App-home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:_id" element={<ProductDetail toggle={toggle} open={open} />} />
          <Route path="/form-pay" element={<FormPay />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/create-product"
            element={(
              <RequireAuth roles={['ADMIN']}>
                <CreateProduct />
              </RequireAuth>
          )}
          />
          <Route
            path="/profile"
            element={(
              <RequireAuth roles={['USER']}>
                <Profile />
              </RequireAuth>
          )}
          />
        </Routes>
      </section>
      <FeetPage />
    </div>
  );
};

export default App;
