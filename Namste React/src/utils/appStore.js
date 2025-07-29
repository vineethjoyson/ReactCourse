import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //Redux Store Setup

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
