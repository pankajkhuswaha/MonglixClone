import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl"; 

import axios from "axios";
import { config } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  filterData: [],
  loading: false,
  error: false,
};
export const getProducts = createAsyncThunk("product", async (data, thu) => {
  const res = await axios.get(`${base_url}product`);
  return res.data;
});

export const addAProduct = createAsyncThunk(
  "product/add-products",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${base_url}product/add`, data, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (payload) => {
    const res = await axios.delete(`${base_url}product/${payload}`, config);
    return res.data;
  }
);



export const AllFilterApi = createAsyncThunk(
  "AllFilterApi",
  async ({ type, value }) => {
    const res = await axios.get(`${base_url}product?${type}=${value}`);
    return res.data;
  }
);




export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllFilterApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AllFilterApi.fulfilled, (state, action) => {
        state.filterData = action.payload;
        state.loading = false;
      })
      .addCase(AllFilterApi.rejected, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.error = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          toast.success(action.payload.message);
          state.products = state.products.filter(
            (product) => product._id !== action.payload._id
          );
        } else {
          toast.error(action.payload.error);
        }
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(addAProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAProduct.fulfilled, (state, action) => {
        state.loading = false;
     
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          toString.error(action.payload.message);
        }
      })
      .addCase(addAProduct.rejected, (state) => {
        state.loading = false;
        state.loading = true;

        toast.error("Add Product Failed");
      })


    
  },
});
export default productSlice.reducer;
