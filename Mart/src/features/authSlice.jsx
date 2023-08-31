import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  success: false,
  error: false,
  loading: true,
  user: {},
  token,
};

export const LoginApi = createAsyncThunk("login", async (payload) => {
  const res = await axios.post(`${base_url}user/login`, payload);
  localStorage.setItem("token", res.data.token);
  console.log(res.data);

  return res.data;
});
export const VerifyApi = createAsyncThunk("Verify", async () => {
  const res = await axios.post(`${base_url}user/verify`, {}, config);
  console.log(res.data);
  return res.data;
});

export const RegisterApi = createAsyncThunk("register", async (payload) => {
  const res = await axios.post(`${base_url}user/register`, payload);
  console.log(res.data);
  return res.data;
});

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterApi.fulfilled, (state, action) => {
        state.success = true;
      })
      .addCase(RegisterApi.rejected, (state, action) => {
        console.log(action.payload), (state.error = true);
      })
      .addCase(LoginApi.fulfilled, (state, action) => {
        state.success = true;
        if (action.payload._id) {
          toast.success("Login Success");
          window.location.href = "/";
        } else {
          toast.error(action.payload);
        }
      })
      .addCase(LoginApi.rejected, (state, action) => {
        (state.error = true), console.log(action.payload);
      })
      .addCase(VerifyApi.fulfilled, (state, action) => {
        (state.success = true), (state.user = action.payload);
      })
      .addCase(VerifyApi.rejected, (state, action) => {
        (state.error = true), console.log(action.payload);
      });
  },
});

export default authSlice.reducer;
