import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
// redux
import { useSelector, useDispatch } from "react-redux";
import { deleteChecked } from "./store/crud/crudSlice";
import { RootState } from "./store/store";

const MAIN_STYLE = "text-[#e3eeee] p-4 md:w-3xl";
const CLEAN_BUTTON_STYLE =
  "w-full border-1 border-[#3e5682] rounded-md p-2 mt-4 transition duration-300 hover:bg-[#3e5682]";

function App() {
  const todoList = useSelector((state: RootState) => state.crudSlice);
  const dispatch = useDispatch();
  
  const SOME_TODO_TO_CLEAN = todoList.some(
    ({ done }: { done: boolean }) => done
  );

  return (
    <main className={MAIN_STYLE}>
      <h1 className="text-5xl">TODO</h1>
      <NewTodo />
      <TodoList />
      {SOME_TODO_TO_CLEAN && (
        <button
          onClick={() => dispatch(deleteChecked())}
          className={CLEAN_BUTTON_STYLE}
        >
          Clean up all completed tasks
        </button>
      )}
    </main>
  );
}

export default App;
