import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  display: string;
}

const initialState: initialState = {
  display: "",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<string>) {
      state.display = action.payload;
    },
  },
});

export const { toggle } = displaySlice.actions;
export default displaySlice.reducer;
