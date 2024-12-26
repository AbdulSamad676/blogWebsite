import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer, // Ensure 'auth' matches the slice name used in `Header`
  },
});

export default store;
