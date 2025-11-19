import { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext)
}
