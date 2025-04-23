import { useDispatch, useSelector } from "react-redux";
import { createTodo, confirmUpdate } from "../store/crud/crudSlice";
import { inputOnchange, cleanInput } from "../store/input/inputSlice";
import { RootState } from "../store/store";
import { useRef } from "react";

const TAILWIND_STYLES = {
  SECTION:
    "flex border-1 border-[#3e5682] rounded-bl-md rounded-tl-md h-12 my-4",
  BUTTON:
    "w-24 outline-none select-none p-2 transition duration-300 hover:bg-[#3e5682]",
  INPUT_TEXT: "w-full outline-none pl-3",
};

function NewTodo() {
  const todo = useSelector((state: RootState) => state.crudSlice);
  const userInput = useSelector((state: RootState) => state.inputSlice.input);

  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const isEditorMode = todo.some((element) => element.index !== -1);

  const editorMode = () => {
    const editedTodoIndex = todo.filter((element) => element.index !== -1)[0]
      .index;

    dispatch(confirmUpdate([editedTodoIndex, inputRef.current!.value]));
    dispatch(cleanInput());
  };

  const CONFIRM_BUTTON = (
    <button className={TAILWIND_STYLES.BUTTON} onClick={editorMode}>
      CONFIRM
    </button>
  );

  const CREATE_BUTTON = (
    <button
      className={TAILWIND_STYLES.BUTTON}
      onClick={() => {
        dispatch(createTodo(userInput));
        dispatch(cleanInput());
      }}
    >
      CREATE
    </button>
  );

  return (
    <section className={TAILWIND_STYLES.SECTION}>
      <input
        type="text"
        className={TAILWIND_STYLES.INPUT_TEXT}
        placeholder="CREATE A NEW TODO"
        value={userInput}
        ref={inputRef}
        onChange={(event) => dispatch(inputOnchange(event))}
      />
      {isEditorMode ? CONFIRM_BUTTON : CREATE_BUTTON}
    </section>
  );
}

export default NewTodo;
