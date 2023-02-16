import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productItem: [],
};

const cartSlice = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(action.payload);
      const cartItem = state.productItem.find((item) => {
        return item._id === action.payload._id;
      });
      if (cartItem) {
        cartItem.amount += 1;
      } else {
        state.productItem.push({ ...action.payload, amount: 1 });
      }
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
