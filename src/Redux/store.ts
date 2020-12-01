import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import cartSliceReducer from "./CartSlice";
export const store = configureStore({
  reducer: {
    reducers: cartSliceReducer,
  },
});
