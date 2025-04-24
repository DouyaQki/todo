import { JSX } from "react";

// App
export interface I_Todo {
  id: number;
  task: string;
  done: boolean;
}
// App
export type T_TODO_LIST = I_Todo[] | [];

// NewTodo
export interface I_NEW_TODO {
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  createTodo: () => void;
  editMode: boolean;
  confirmEdit: () => void;
}

// TodoList component
export interface I_TODO_LIST {
  data: T_TODO_LIST;
  editCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
  deleteTodo: (event: React.MouseEvent<HTMLImageElement>) => void;
  editTodo: (event: React.MouseEvent<HTMLImageElement>) => void;
  editMode: boolean;
}

export interface CB_DATA {
  (
    {
      task,
      id,
      editorMode,
    }: { task: string; id: string; editorMode: boolean },
    index: number
  ): JSX.Element;
}