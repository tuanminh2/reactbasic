import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import completedTodoSlice from "./completedTodoSlice";
import otherTodoSlice from "./otherTodoSlice";
export default configureStore({
  reducer: {
    todoSlice: todoSlice,
    completedTodoSlice: completedTodoSlice,
    otherTodoSlice: otherTodoSlice,
  },
});


