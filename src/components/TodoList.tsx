import { JSX } from "react";
import { I_TODO_LIST, I_Todo } from "../types";
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

function TodoList({
  data,
  editCheckBox,
  deleteTodo,
  editTodo,
  editMode,
}: I_TODO_LIST) {
  const CB_DATA = ({ task, id }: I_Todo, index: number) => {
    const EDIT_MODE_OR_CHECKBOX = editMode ? null : (
      <input
        type="checkbox"
        className="h-5 w-5"
        onChange={editCheckBox}
        data-ind={index}
      />
    );
    return (
      <li key={id} className="h-12 border-b-1 flex items-center gap-3 py-2">
        <label className="flex w-full items-center gap-3">
          {EDIT_MODE_OR_CHECKBOX}
          <p className="text-[1.25rem]">{task}</p>
        </label>
        {!editMode && (
          <>
            <img
              src={edit}
              alt="edit button"
              className="h-full select-none transition duration-300 hover:bg-[#3e5682]"
              data-ind={index}
              onClick={editTodo}
            />
            <img
              src={deleteIcon}
              alt="delete button"
              className="h-full select-none transition duration-300 hover:bg-[#3e5682]"
              data-ind={index}
              onClick={deleteTodo}
            />
          </>
        )}
      </li>
    );
  };
  const LIST_OF_TODOS: JSX.Element[] = data.map(CB_DATA);

  const IF_DATA_EXISTS: boolean = data.length >= 1 ? true : false;
  return <ul className="h-96 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">{IF_DATA_EXISTS && LIST_OF_TODOS}</ul>;
}

export default TodoList;
