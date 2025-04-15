// App
export interface I_Todo {
  id: number;
  task: string;
  done: boolean;
}
// App
export type T_TODO_LIST = I_Todo[] | [];

// NewTodo
export interface I_PROPS {
    data?: T_TODO_LIST;
    handleSetData: (data: I_Todo) => void;
  }
  