import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { product_url } from "../utils/baseUrl";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  error: false,
};
export const getProducts = createAsyncThunk("product", async () => {
  const res = await axios.get(`${product_url}product`);
  return res.data;
});
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = true;
        console.log(state.error);
      });
  },
});
export default productSlice.reducer;
