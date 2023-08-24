import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";
import axios from "axios";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  success: false,
  error: false,
  loading: true,
  token,
};

export const LoginApi = createAsyncThunk("login", async (payload) => {
  const res = await axios.post(`${base_url}login`, payload);
  console.log(res.data);
  localStorage.setItem("token", res.data.token);
  return res.data;
});

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
      )
      .addCase(LoginApi.fulfilled, (state, action) =>
        console.log(action.payload)
      )
      .addCase(LoginApi.rejected, (state, action) =>
        console.log(action.payload)
      );
  },
});

export default authSlice.reducer;
