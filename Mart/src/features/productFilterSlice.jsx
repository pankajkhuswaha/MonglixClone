import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";

export const SearchProductApi = createAsyncThunk(
  "Searchproduct",
  async (payload) => {
    const res = await axios.get(`${base_url}product?search=${payload}`);
    console.log(res.data);
    return res.data;
  }
);

const productFiltersSlice = createSlice({
  name: "productFilters",
  initialState: {
    filterProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchProductApi.fulfilled, (state, action) => {
        state.filterProducts = action.payload;
      })
      .addCase(SearchProductApi.rejected, (state, action) => {
        console.log(action.payload);
        toast.error("Internal Server Error!");
      });
  },
});

export default productFiltersSlice.reducer;
