// redux
// <New Todo />
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { toggle } from "./store/display/displaySlice";
import { createTodo, confirmUpdate } from "./store/crud/crudSlice";
import { inputOnchange, cleanInput } from "./store/input/inputSlice";
import { deleteChecked } from "./store/crud/crudSlice";

// todo [x]
import {
  deleteTodo,
  updateTodoIndex,
  updateCheck,
} from "./store/crud/crudSlice";
import { sendToInput } from "./store/input/inputSlice";

// <TodoList />

function useRedux() {
  const todo = useSelector((state: RootState) => state.crudSlice);
  const userInput = useSelector((state: RootState) => state.inputSlice.input);
  const display = useSelector((state: RootState) => state.display);

  const dispatch = useDispatch();

  return {
    dispatch,
    display,
    inputOnchange,
    todo,
    userInput,
    toggle,
    createTodo,
    confirmUpdate,
    cleanInput,
    deleteTodo,
    updateTodoIndex,
    updateCheck,
    sendToInput,
    deleteChecked
  };
}

export default useRedux;
