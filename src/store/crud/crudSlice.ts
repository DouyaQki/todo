//redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//id
import { v4 as uuidv4 } from "uuid";

export interface todo {
  id: string;
  task: string;
  done: boolean;
  index: number;
  editorMode: boolean;
}

type initialState = [] | todo[];
const initialState: initialState = [];

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<string>) {
      const userInput = action.payload.trim();

      const NO_INPUT = userInput.length === 0;

      if (NO_INPUT) return;

      const TODO = {
        id: uuidv4(),
        task: userInput,
        done: false,
        index: -1,
        editorMode: false,
      };

      const NEW_TODO = [...state, TODO];

      return NEW_TODO;
    },
    updateCheck(state, action: PayloadAction<number>) {
      const checked = state[action.payload].done;

      if (checked) {
        state[action.payload].done = false;
        return;
      }

      state[action.payload].done = true;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      const filteredTodo = state.filter(
        (_, index: number) => action.payload !== index
      );

      return filteredTodo;
    },
    deleteChecked(state) {
      const filterChecked = state.filter(({ done }) => !done);

      return filterChecked;
    },
    updateTodoIndex(state, action: PayloadAction<number>) {
      state[action.payload].index = action.payload;
      state[action.payload].editorMode = true
      // mandar el todo al input
    },
    confirmUpdate(state, action: PayloadAction<[number, string]>) {
      const userInput = action.payload[1].trim();

      const NO_INPUT = userInput.length === 0;

      if (NO_INPUT) return;

      state[action.payload[0]].task = userInput;
      state[action.payload[0]].index = -1;
      state[action.payload[0]].editorMode = false;
    },
  },
});

export const {
  createTodo,
  updateCheck,
  deleteTodo,
  deleteChecked,
  updateTodoIndex,
  confirmUpdate,
} = crudSlice.actions;
export default crudSlice.reducer;
