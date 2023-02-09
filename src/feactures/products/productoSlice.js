import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getProducts, productId, createProd } from './productAPI';

const initialState = {
  items: [],
  detail: null,
  status: 'idle',
  error: null,
};

export const setProducts = createAsyncThunk('product/getProduct', async () => {
  const resp = await getProducts();
  return resp;
});

export const getProdu = createAsyncThunk('product/getProdu', async (id) => {
  const resp = await productId(id);
  return resp;
});

export const createProduct = createAsyncThunk(
  'products/createProducts',
  async (values) => {
    const resp = await createProd(values);
    return resp;
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setProducts.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(setProducts.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.items = action.payload;
        return newState;
      })
      .addCase(setProducts.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      })
      .addCase(getProdu.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(getProdu.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.detail = action.payload;
        return newState;
      })
      .addCase(getProdu.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.items = action.payload;
        return newState;
      })
      .addCase(createProduct.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload;
      });
  },
});
export const selectproduct = (state) => state.product;

export default productSlice.reducer;
