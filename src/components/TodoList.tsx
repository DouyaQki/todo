// types
import { CB_DATA } from "../types";
// react
import { JSX } from "react";
// images
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import checkIcon from "../assets/check.svg";
// redux
import useRedux from "../useRedux";

// styles
import { LI_STYLE, TAILWIND_STYLES, UL_STYLE } from "../tailwindStyles";

function TodoList() {
  const {
    dispatch,
    todo,
    display,
    deleteTodo,
    updateTodoIndex,
    updateCheck,
    toggle,
  } = useRedux();

  const TODO_DONE =
    " cursor-pointer backdrop-blur-[5px] bg-[#22c9001a] shadow-[0px_0px_5px_0px_rgba(255,_255,_255,_0.10)] rounded-md flex justify-start items-end gap-3 p-2 my-3 transition duration-500 hover:backdrop-blur-[5px] hover:bg-[#22c90033] hover:shadow-[0px_0px_15px_1px_rgba(255,_255,_255,_0.10)]";

  const HIDE = " hidden";
  const DISPLAY = "";

  const CB_DATA: CB_DATA = ({ task, id, editorMode, done }, index) => {
    const changeEditorMode = (changeTo: boolean) => {
      dispatch(toggle(DISPLAY));
      dispatch(updateTodoIndex([index, changeTo]));
    };

    const selectTodo = () => {
      if (editorMode) return;

      dispatch(updateCheck(index));
    };

    const CONFIRM_BUTTON = editorMode ? (
      <img
        src={checkIcon}
        alt="confirm"
        className={TAILWIND_STYLES.BUTTON}
        onClick={() => changeEditorMode(false)}
      />
    ) : null;

    return (
      <li key={id} className={done ? TODO_DONE : LI_STYLE.li}>
        <textarea
          className={
            editorMode
              ? LI_STYLE.p + " cursor-text field-sizing-fixed "
              : LI_STYLE.p
          }
          defaultValue={editorMode ? "" : task}
          readOnly={editorMode ? false : true}
          onClick={selectTodo}
        />
        {CONFIRM_BUTTON}
        <img
          src={edit}
          alt="edit todo"
          className={LI_STYLE.img + display.display}
          onClick={() => {
            dispatch(updateTodoIndex([index, true]));
            dispatch(toggle(HIDE));
          }}
        />
        <img
          src={deleteIcon}
          alt="delete todo"
          className={LI_STYLE.img + display.display}
          onClick={() => dispatch(deleteTodo(index))}
        />
      </li>
    );
  };
  const LIST_OF_TODOS: JSX.Element[] = todo.map(CB_DATA);

  const IF_DATA_EXISTS: boolean = todo.length >= 1 ? true : false;

  const TODO = IF_DATA_EXISTS && LIST_OF_TODOS;

  return <ul className={UL_STYLE}>{TODO}</ul>;
}

export default TodoList;
