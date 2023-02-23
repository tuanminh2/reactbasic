import { createSlice } from "@reduxjs/toolkit";
export const completedTodoSlice = createSlice({
  name: "def",
  initialState: {
    completedTodo:
      JSON.parse(sessionStorage.getItem("completedTodo")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("completedTodo")),
  },
  reducers: {
    updateCompletedTodos: (state, action) => {
      state.completedTodo = action.payload;
    },
  },
});

export const { updateCompletedTodos } = completedTodoSlice.actions;
export default completedTodoSlice.reducer;
