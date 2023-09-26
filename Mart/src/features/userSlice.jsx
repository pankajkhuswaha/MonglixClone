import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../utils/axiosConfig";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
const initialState = {
  value: 0,
};
export const ProfileResetApi = createAsyncThunk(
  "userprofile",
  async (payload) => {
    const res = await axios.put(
      `${base_url}user/edit-user`,
      payload,
      config
    );
    console.log(res);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProfileResetApi.fulfilled, (state, action) => {
      console.log(action.payload)
    });
  },
});

export default userSlice.reducer;