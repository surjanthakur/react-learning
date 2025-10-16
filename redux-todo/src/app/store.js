import { configureStore } from "@reduxjs/toolkit";
import todoSlices from "../feature/todoSlice";

const Store = configureStore({
  reducer: todoSlices,
});

export default Store;
