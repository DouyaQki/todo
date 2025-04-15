import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { T_TODO_LIST, I_Todo } from "./types";

function App() {
  const [data, setData] = useState<T_TODO_LIST>([]);

  const handleSetData = (newData: I_Todo): void => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <main className="text-[#e3eeee]">
      <h1 className="text-5xl font-bold">TODO</h1>
      <NewTodo handleSetData={handleSetData} />
      <TodoList />
      <button onClick={() => console.log(data)}>Display todos</button>
    </main>
  );
}

export default App;
