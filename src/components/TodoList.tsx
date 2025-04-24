// types
import { CB_DATA } from "../types";
// react
import { JSX } from "react";
// images
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
// redux
import useRedux from "../useRedux";

// styles
import { LI_STYLE, CHECKBOX_STYLE, UL_STYLE } from "../tailwindStyles";

function TodoList() {
  const {
    dispatch,
    todo,
    display,
    deleteTodo,
    updateTodoIndex,
    updateCheck,
    sendToInput,
    toggle,
  } = useRedux();

  const HIDE = " hidden";

  const CB_DATA: CB_DATA = ({ task, id, editorMode }, index) => {
    return (
      <li key={id} className={LI_STYLE.li}>
        <label className={LI_STYLE.label}>
          <input
            type="checkbox"
            className={CHECKBOX_STYLE + display.display}
            onChange={() => dispatch(updateCheck(index))}
          />
          <p className={LI_STYLE.p}>{editorMode ? null : task}</p>
        </label>
        <img
          src={edit}
          alt="edit todo"
          className={LI_STYLE.img + display.display}
          onClick={() => {
            dispatch(updateTodoIndex(index));
            dispatch(sendToInput(task));
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
