import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crud/crudSlice";
import inputSlice from "./input/inputSlice";

export const store = configureStore({
  reducer: {
    crudSlice,
    inputSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
