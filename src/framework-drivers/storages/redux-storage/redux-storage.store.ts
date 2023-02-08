import { configureStore } from "@reduxjs/toolkit";
import { reduxRootReducer } from "../../../controllers/redux-store/redux-store-root.reducer";

export const reduxStore = configureStore({
  reducer: reduxRootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});