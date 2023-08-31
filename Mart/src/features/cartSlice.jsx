import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const initialState = {
  carts: [],
  loading: true,
  error: false,
};
export const addCart = createAsyncThunk("addcart", async (payload) => {
  const res = await axios.post(`${base_url}cart`, payload, config);
  console.log(res.data);
  return res.data;
});
export const userCart = createAsyncThunk("cart", async () => {
  const res = await axios.get(`${base_url}cart`, config);
  return res.data;
});
export const updateCart = createAsyncThunk("updatecart", async (payload) => {
  const res = await axios.put(`${base_url}cart`, payload, config);
  return res.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userCart.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.loading = false;
      })
      .addCase(userCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        if (action.payload.error) {
          toast.error(action.payload.error);
        } else {
          state.carts = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        // state.carts.push(action.payload);
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(addCart.pending, (state) => {
        state.loading = true;
      });
  },
});
export default cartSlice.reducer;
