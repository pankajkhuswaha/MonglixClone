import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  filterData: [],
  loading: true,
  error: false,
};
export const getProducts = createAsyncThunk("product", async () => {
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

// fiterration

export const SearchProductApi = createAsyncThunk(
  "Searchproduct",
  async (payload) => {
    const res = await axios.get(`${base_url}product?search=${payload}`);
    console.log(res.data);
    return res.data;
  }
);
export const FilterProductApi = createAsyncThunk(
  "Filterproduct",
  async (payload) => {
    const { type, value } = payload;
    const res = await axios.get(`${base_url}product?${type}=${value}`);
    console.log(res.data);
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
        state.loading = false;
        console.log(action.payload);
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          toast.error(action.payload.message);
        }
      })
      .addCase(addAProduct.rejected, (state) => {
        state.loading = false;
        state.loading = true;

        toast.error("Add Product Failed");
      })
      // fiteration begins
      .addCase(SearchProductApi.fulfilled, (state, action) => {
        state.filterData = action.payload;
        console.log(action.payload);
      })

      .addCase(SearchProductApi.rejected, (state, action) => {
        console.log(action.payload);
        toast.error("Internal Server Error!");
      })
      .addCase(FilterProductApi.fulfilled, (state, action) => {
        state.filterData = action.payload;
        console.log(action.payload);
      });
  },
});
export default productSlice.reducer;
