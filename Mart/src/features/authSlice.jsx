import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
const initialState = {};

export const RegisterApi = createAsyncThunk("register", async (payload) => {
  const res = await axios.post(`${base_url}register`, payload);
  console.log(res.data);
  return res.data;
});

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterApi.fulfilled, (state, action) =>
        console.log(action.payload)
      )
      .addCase(RegisterApi.rejected, (state, action) =>
        console.log(action.payload)
      );
  },
});

export default authSlice.reducer;
