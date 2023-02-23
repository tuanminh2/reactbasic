import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import completedTodoSlice from "./completedTodoSlice";
export default configureStore({
  reducer: {
    todoSlice: todoSlice,
    completedTodoSlice: completedTodoSlice,
  },
});


