// components
import ClearButton from "./components/ClearButton";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

// styles
import { MAIN_STYLE, H1_TITLE } from "./tailwindStyles";

function App() {
  return (
    <main className={MAIN_STYLE}>
      <h1 className={H1_TITLE}>TODO</h1>
      <NewTodo />
      <TodoList />
      <ClearButton />
    </main>
  );
}

export default App;
