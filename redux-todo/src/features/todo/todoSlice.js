import { createSlice, nanoid } from "@reduxjs/toolkit";

// 1. Define the initial state of the todo slice
const initialState = {
  todos: [{}],
};

// 2. Create the todo slice using createSlice from Redux Toolkit
export const todoSlice = createSlice({
  // 3. Define the name, initial state, and reducers for the slice
  name: "todo",
  initialState,
  // 4. Define the reducers for adding, removing, and updating todos
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existTodo = state.todos.find((todo) => todo.id === id);
      if (existTodo) {
        existTodo.text = text;
      } else {
        console.warn(`Todo with id ${id} not found.`);
      }
    },
  },
});

// 5. Export the reducer and actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// 6. Export the reducer as the default export
export default todoSlice.reducer;
