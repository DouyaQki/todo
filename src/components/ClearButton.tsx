// redux
import useRedux from "../useRedux";

// styles
import { CLEAR_BUTTON_STYLE } from "../tailwindStyles";

function ClearButton() {
  const { todo, display, deleteChecked, dispatch } = useRedux();

  const SOME_TODO_TO_CLEAR = todo.some(({ done }: { done: boolean }) => done);

  const clear = () => dispatch(deleteChecked());
  const CLEAR = "Clear all completed tasks";

  return (
    SOME_TODO_TO_CLEAR && (
      <button onClick={clear} className={CLEAR_BUTTON_STYLE + display}>
        {CLEAR}
      </button>
    )
  );
}

export default ClearButton;
