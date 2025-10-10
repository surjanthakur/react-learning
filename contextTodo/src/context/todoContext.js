import { useContext, createContext } from "react";

// create context
export const TodoContext = createContext({
  todos: [{}],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// create context provider
export const TodoContextProvider = TodoContext.Provider;

// use context
export const UseTodo = () => {
  return useContext(TodoContext);
};
