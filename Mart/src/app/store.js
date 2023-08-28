import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import productSlice from "../features/ProductSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});
