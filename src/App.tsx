import { useState, useRef } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { T_TODO_LIST, I_Todo } from "./types";

function App() {
  const [data, setData] = useState<T_TODO_LIST>([]);
  const [editedTodoIndex, setEditedTodoIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [todoId, setTodoId] = useState<number>(0);

  // USER INPUT
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  const handleClearInput = () => {
    setUserInput("");
  };

  // CHECKED?
  const editCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // get index [x]
    const inputIndex: number = Number(event.target.dataset.ind);

    // modify CHECK
    const DATA_CHECKED_COPY = [...data];
    DATA_CHECKED_COPY[inputIndex].done = event.target.checked;

    // return new data

    setData(DATA_CHECKED_COPY);
  };

  // NEW TODO
  const handleSetData = (newData: I_Todo): void => {
    setData((prevData) => [...prevData, newData]);
  };

  // new id
  const assignId = () => setTodoId((prev) => prev + 1);

  function createTodo() {
    const EMPTY_INPUT = userInput.length === 0;

    if (EMPTY_INPUT) return;

    assignId();

    // assign new todo
    const NEW_TODO = {
      id: todoId,
      task: userInput,
      done: false,
    };

    handleSetData(NEW_TODO);

    // Clean user input
    handleClearInput();
  }

  // DELETE
  const deleteTodo = (event: React.MouseEvent<HTMLImageElement>): void => {
    const inputIndex: number = Number(event.currentTarget.dataset.ind);

    const DELETED_DATA = data.filter((_, index) => inputIndex !== index);

    setData(DELETED_DATA);
  };

  // EDIT
  const editTodo = (event: React.MouseEvent<HTMLImageElement>) => {
    const inputIndex: number = Number(event.currentTarget.dataset.ind);
    setEditedTodoIndex(inputIndex);

    setEditMode((prevState) => !prevState);

    // traer task al input
    setUserInput(data[inputIndex].task);

    const DATA_COPY = [...data];
    DATA_COPY[inputIndex].task = "";

    setData(DATA_COPY);
  };

  const confirmEdit = () => {
    setEditMode((prevState) => !prevState);

    const DATA_COPY = [...data];
    DATA_COPY[editedTodoIndex].task = userInput;

    setData(DATA_COPY);
    handleClearInput();
  };

  return (
    <main className="text-[#e3eeee] p-4">
      <h1 className="text-5xl">TODO</h1>
      <NewTodo
        handleUserInput={handleUserInput}
        userInput={userInput}
        createTodo={createTodo}
        editMode={editMode}
        confirmEdit={confirmEdit}
      />
      <TodoList
        data={data}
        editCheckBox={editCheckBox}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editMode={editMode}
      />
    </main>
  );
}

export default App;
