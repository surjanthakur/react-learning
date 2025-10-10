import { useContext, createContext } from "react";

// create context
export const TodoContext = createContext();

// create context provider
export const TodoContextProvider = TodoContext.Provider;

// use context
export const useTodo = () => {
  return useContext(TodoContext);
};
