import { JSX } from "react";
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  todo,
  deleteTodo,
  updateTodoIndex,
} from "../../src/store/crud/crudSlice";

import { updateCheck } from "../../src/store/crud/crudSlice";
import { sendToInput } from "../store/input/inputSlice";
// <ul> style
const UL_STYLE =
  "h-96 overflow-y-auto  [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-gray-300  dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500";

const CHECKBOX_STYLE = "h-5 w-5";

const LI_STYLE = {
  li: "h-12 border-b-1 flex items-center gap-3 py-2",
  label: "flex w-full items-center gap-3",
  p: "text-[1.25rem]",
  img: "h-full select-none transition duration-300 hover:bg-[#3e5682]",
  checkbox: "h-5 w-5",
};

function TodoList() {
  const todoList = useSelector((state: RootState) => state.crudSlice);
  const dispatch = useDispatch();

  const CB_DATA = ({ task, id, editorMode }: todo, index: number) => {
    const EDIT_AND_DELETE = editorMode ? null : (
      <>
        <img
          src={edit}
          alt="edit todo"
          className={LI_STYLE.img}
          onClick={() => {
            dispatch(updateTodoIndex(index));
            dispatch(sendToInput(task));
          }}
        />
        <img
          src={deleteIcon}
          alt="delete todo"
          className={LI_STYLE.img}
          onClick={() => dispatch(deleteTodo(index))}
        />
      </>
    );
    return (
      <li key={id} className={LI_STYLE.li}>
        <label className={LI_STYLE.label}>
          <input
            type="checkbox"
            className={CHECKBOX_STYLE}
            onChange={() => dispatch(updateCheck(index))}
          />
          <p className={LI_STYLE.p}>{editorMode ? null : task}</p>
        </label>
        {EDIT_AND_DELETE}
      </li>
    );
  };
  const LIST_OF_TODOS: JSX.Element[] = todoList.map(CB_DATA);

  const IF_DATA_EXISTS: boolean = todoList.length >= 1 ? true : false;

  return <ul className={UL_STYLE}>{IF_DATA_EXISTS && LIST_OF_TODOS}</ul>;
}

export default TodoList;
