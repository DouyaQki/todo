import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crud/crudSlice";
import inputSlice from "./input/inputSlice";
import display from './display/displaySlice'

export const store = configureStore({
  reducer: {
    crudSlice,
    inputSlice,
    display
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
