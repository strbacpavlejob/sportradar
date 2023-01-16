import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./score/scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});
