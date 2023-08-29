import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import productSlice from "../features/ProductSlice";
import loadingSlice from "../features/loading/loadingSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    loading:loadingSlice
  },
});
