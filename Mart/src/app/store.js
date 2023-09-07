import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/ProductSlice";
import loadingSlice from "../features/loading/loadingSlice";
import configSlice from "../features/Website/configSlice";
import productFiltersSlice from "../features/productFilterSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    loading: loadingSlice,
    cart: cartSlice,
    filter: productFiltersSlice,
    site: configSlice,
  },
});
