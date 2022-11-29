import { configureStore } from "@reduxjs/toolkit";
import modeSliceReducer from './features/theme-mode/modeSlice';

export const store = configureStore({
  reducer: {
    modeslice: modeSliceReducer
  }
})