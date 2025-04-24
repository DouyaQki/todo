// redux
import useRedux from "../useRedux";
// react
import { useRef } from "react";

// styles
import { TAILWIND_STYLES } from "../tailwindStyles";

function NewTodo() {
  const {
    dispatch,
    userInput,
    createTodo,
    confirmUpdate,
    cleanInput,
    todo,
    toggle,
    inputOnchange,
  } = useRedux();
  
  const DISPLAY = "";
  const PLACEHOLDER = "CREATE A NEW TODO";
  const inputRef = useRef<HTMLInputElement>(null);

  const isEditorMode = todo.some((element) => element.index !== -1);

  const editorMode = () => {
    const editedTodoIndex = todo.filter((element) => element.index !== -1)[0]
      .index;

    dispatch(confirmUpdate([editedTodoIndex, inputRef.current!.value]));
    dispatch(cleanInput());
    dispatch(toggle(DISPLAY));
  };

  const create = () => {
    dispatch(createTodo(userInput));
    dispatch(cleanInput());
  };

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputOnchange(event));
  };

  const CONFIRM_BUTTON = (
    <button className={TAILWIND_STYLES.BUTTON} onClick={editorMode}>
      CONFIRM
    </button>
  );

  const CREATE_BUTTON = (
    <button className={TAILWIND_STYLES.BUTTON} onClick={create}>
      CREATE
    </button>
  );

  const BUTTON = isEditorMode ? CONFIRM_BUTTON : CREATE_BUTTON;

  return (
    <section className={TAILWIND_STYLES.SECTION}>
      <input
        type="text"
        className={TAILWIND_STYLES.INPUT_TEXT}
        placeholder={PLACEHOLDER}
        value={userInput}
        ref={inputRef}
        onChange={input}
      />
      {BUTTON}
    </section>
  );
}

export default NewTodo;
