import { useState } from "react";
import { I_PROPS } from "../types";

function NewTodo({ handleSetData }: I_PROPS) {
  const [todoId, setTodoId] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  };

  // new id
  const assignId = () => setTodoId((prev) => prev + 1);
  
  function createTodo() {
    assignId();
    // new todo
    const NEW_TODO = {
      id: todoId,
      task: userInput,
      done: false,
    };
    
    handleSetData(NEW_TODO);
  }

  return (
    <section className="flex">
      <input
        type="text"
        className="bg-[#171717]"
        placeholder="CREATE A NEW TODO"
        onChange={handleOnChange}
      />
      <button onClick={createTodo}>CREATE</button>
    </section>
  );
}

export default NewTodo;
