import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  loading: true,
  error: false,
};
export const getProducts = createAsyncThunk("product", async () => {
  const res = await axios.get(`${base_url}product`);
  return res.data;
});

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (payload) => {
    const res = await axios.delete(`${base_url}product/${payload}`, config);
    return res.data;
  }
);
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
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.error = true;
        console.log(state.error);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          toast.error(action.payload.error);
        }
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      });
  },
});
export default productSlice.reducer;
