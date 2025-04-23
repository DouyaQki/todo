import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  input: string;
}

const initialState: initialState = {
  input: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputOnchange(
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement>>
    ) {
      state.input = action.payload.currentTarget.value;
    },
    cleanInput(state) {
      state.input = "";
    },
    sendToInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
  },
});

export default inputSlice.reducer;
export const { inputOnchange, cleanInput, sendToInput } = inputSlice.actions;
