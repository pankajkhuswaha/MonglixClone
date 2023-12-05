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
  return res.data;
});
export const deleteCart = createAsyncThunk("deletecart", async (id) => {
  const res = await axios.delete(`${base_url}cart/${id}`, config);
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
export const applyCouponcode = createAsyncThunk(
  "couponcode",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(`${base_url}payment/couponcode`, payload, config);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcarts:(state,action)=>{
      state.carts=action.payload;
    }
  },
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
        }
        state.loading = false;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(applyCouponcode.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(applyCouponcode.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        toast.error(action.payload)
      })
      .addCase(addCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        if (action.payload.error) {
          toast.error(action.payload.error);
        } else {
          state.carts = action.payload;
          toast.success("Item succesfully Deleted!");
        }
      });
  },
});
export const {addcarts}=cartSlice.actions;
export default cartSlice.reducer;
