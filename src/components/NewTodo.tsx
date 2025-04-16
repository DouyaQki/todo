import { I_NEW_TODO } from "../types";

function NewTodo({
  handleUserInput,
  userInput,
  createTodo,
  editMode,
  confirmEdit,
  
}: I_NEW_TODO) {
  const CREATE_TODO_OR_EDIT_MODE = editMode ? (
    <button
      onClick={confirmEdit}
      className="w-24 outline-none select-none p-2 transition duration-300 hover:bg-[#3e5682]"
    >
      CONFIRM
    </button>
  ) : (
    <button
      onClick={createTodo}
      className="w-24 outline-none select-none p-2 transition duration-300 hover:bg-[#3e5682]"
    >
      CREATE
    </button>
  );
  return (
    <section className="flex border-1 border-[#3e5682] rounded-bl-md rounded-tl-md h-12 my-4">
      <input
        type="text"
        className="w-full outline-none pl-3"
        placeholder="CREATE A NEW TODO"
        value={userInput}
        onChange={handleUserInput}
      />
      {CREATE_TODO_OR_EDIT_MODE}
    </section>
  );
}

export default NewTodo;
