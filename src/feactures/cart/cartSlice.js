/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productItem: [],
};

const cartSlice = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const cartItem = state.productItem.find((item) => {
        return item._id === action.payload._id;
      });
      if (cartItem) {
        cartItem.amount += 1;
      } else {
        state.productItem.push({ ...action.payload, amount: 1 });
      }
    },
    incrementAmount: (state, action) => {
      const increment = state.productItem.find((item) => item._id === action.payload);
      increment.amount += 1;
    },
    decrementAmount: (state, action) => {
      const decrement = state.productItem.find((item) => item._id === action.payload);
      if (decrement.amount === 1) {
        decrement.amount = 1;
      } else {
        decrement.amount -= 1;
      }
    },
    DeleteItem: (state, action) => {
      const deleteItem = state.productItem.filter((item) => item._id !== action.payload);
      state.productItem = deleteItem;
    },
  },
});

export const {
  addCart, DeleteItem, incrementAmount, decrementAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
