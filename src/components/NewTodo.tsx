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
    cleanInput,
    inputOnchange,
    display,
    todo,
  } = useRedux();

  const editorMode = todo.some(({ editorMode }) => editorMode);
  const todosDone = todo.filter(({ done }) => done).length;

  const todosDoneMessage = ` / Done: ${todosDone}`;

  const NO_PLACEHOLDER = "";
  const HIDDEN = " hidden";
  const INVISIBLE = "invisible";

  const disableInput = display.display === HIDDEN ? true : false;

  const PLACEHOLDER = "New todo";
  const inputRef = useRef<HTMLInputElement>(null);

  const inputPlaceholder = editorMode
    ? NO_PLACEHOLDER
    : PLACEHOLDER + todosDoneMessage;

  const create = () => {
    dispatch(createTodo(userInput));
    dispatch(cleanInput());
  };

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputOnchange(event));
  };

  const pressEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    create();
  };

  return (
    <section className={editorMode ? INVISIBLE : TAILWIND_STYLES.SECTION}>
      <input
        type="text"
        className={TAILWIND_STYLES.INPUT_TEXT}
        placeholder={inputPlaceholder}
        value={userInput}
        ref={inputRef}
        onChange={input}
        onKeyUp={pressEnterKey}
        disabled={disableInput}
      />
      <button
        className={TAILWIND_STYLES.BUTTON + display.display}
        onClick={create}
      >
        CREATE
      </button>
    </section>
  );
}

export default NewTodo;
