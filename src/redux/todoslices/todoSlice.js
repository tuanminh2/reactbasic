import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "abc",
  initialState: {
    todos:
      JSON.parse(sessionStorage.getItem("todos")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("todos")),
  },
  reducers: {
    updateTodos: (state, action) => {
      state.todos = action.payload;
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { updateTodos } = todoSlice.actions;
export default todoSlice.reducer;
