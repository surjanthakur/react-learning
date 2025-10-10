import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{}],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export function UseTodo() {
  return useContext(TodoContext);
}
