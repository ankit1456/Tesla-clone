import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../redux/carSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
