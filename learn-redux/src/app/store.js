import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../features/todo";

const Store = configureStore({reducer: TodoSlice})

export default Store

