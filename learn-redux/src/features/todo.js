import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid, task: "get up 6am", completed: false }],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };

      state.todos.push(newTodo);
    },
    // update todo
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const editTodo = state.todos.find((todo) => todo.id == id);
      if (editTodo) {
        editTodo.task = task;
      }
    },
    // remove todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const {addTodo , updateTodo , removeTodo} = TodoSlice.actions
export default TodoSlice.reducer