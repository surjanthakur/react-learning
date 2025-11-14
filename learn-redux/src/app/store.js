import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../features/todo";

const store = configureStore({reducer: TodoSlice})

export default store

