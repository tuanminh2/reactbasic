import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import completedTodoSlice from "./completedTodoSlice";
import otherTodoSlice from "./otherTodoSlice";
import alertReducer from "./reducers/alertReducer";
export default configureStore({
  reducer: {
    todoSlice: todoSlice,
    completedTodoSlice: completedTodoSlice,
    otherTodoSlice: otherTodoSlice,
    alertState: alertReducer
  },
});


