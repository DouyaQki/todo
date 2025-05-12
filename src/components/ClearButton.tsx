// redux
import useRedux from "../useRedux";

// styles
import { CLEAR_BUTTON_STYLE } from "../tailwindStyles";
import { toggle } from "../store/display/displaySlice";

function ClearButton() {
  const { todo, display, deleteAll, dispatch } = useRedux();
  const DISPLAY = "";


  const editorMode = todo.some(({editorMode}) => editorMode !== true)

  const SOME_TODO = todo.length >= 1 && editorMode

  const clear = () => {
    dispatch(deleteAll())
    dispatch(toggle(DISPLAY))
  }

  const CLEAR = "Clear all";
  return (
    SOME_TODO && (
      <button onClick={clear} className={CLEAR_BUTTON_STYLE + display + "transition duration-300 hover:bg-[#d0727252] hover:shadow-[0px_0px_15px_1px_rgba(255,_255,_255,_0.10)] self-end"}>
        {CLEAR}
      </button>
    )
  );
}

export default ClearButton;
