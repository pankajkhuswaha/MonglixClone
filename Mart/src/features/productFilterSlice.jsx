import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";

export const SearchProductApi = createAsyncThunk("Searchproduct", async () => {
  const res = await axios.get(`${base_url}product?search=${"folder"}`);
  console.log(res.data);
  return res.data;
});

const productFiltersSlice = createSlice({
  name: "productFilters",
  initialState: {
    filterProducts: [],
  },
  reducers: {},
});

export const { setFilters, setSortOption } = productFiltersSlice.actions;
export default productFiltersSlice.reducer;
