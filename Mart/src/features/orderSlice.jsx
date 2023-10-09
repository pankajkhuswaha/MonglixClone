import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../utils/axiosConfig";
import { base_url } from "../utils/baseUrl";

import axios from "axios";
const initialState = {
  orders: [],
};
export const OrderApi = createAsyncThunk("order", async () => {
  const res = await axios.get(`${base_url}order`, config);
  return res.data;
});

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(OrderApi.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export default orderSlice.reducer;
