import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feactures/products/productoSlice';
import cartReducer from '../feactures/cart/cartSlice';
import authReducer from '../feactures/login/authLoginSlice';
import modalReducer from '../feactures/modal/loginmodalSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export default store;
