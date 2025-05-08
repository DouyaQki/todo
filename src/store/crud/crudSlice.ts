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
      state[action.payload].done = !state[action.payload].done;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      const filteredTodo = state.filter(
        (_, index: number) => action.payload !== index
      );

      return filteredTodo;
    },
    deleteAll(state) {
      state = [];

      return state;
    },
    updateTodoIndex(state, action: PayloadAction<[number, boolean]>) {
      state[action.payload[0]].index = action.payload[0];
      state[action.payload[0]].editorMode = action.payload[1];
      // mandar el todo al input
    },
    // confirmUpdate(state, action: PayloadAction<[number, string]>) {
    //   const userInput = action.payload[1].trim();

    //   const NO_INPUT = userInput.length === 0;

    //   if (NO_INPUT) return;

    //   state[action.payload[0]].task = userInput;
    //   state[action.payload[0]].index = -1;
    //   state[action.payload[0]].editorMode = false;
    // },
  },
});

export const {
  createTodo,
  updateCheck,
  deleteTodo,
  deleteAll,
  updateTodoIndex,
  // confirmUpdate,
} = crudSlice.actions;
export default crudSlice.reducer;
