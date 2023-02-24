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

    addCompletedTodo: (state, action) => {
      let tmpArr = [...state.completedTodo];

      let oldElIdx = tmpArr.findIndex((el) => el.id == action.payload.id);
      if (oldElIdx !== -1) {
        tmpArr.splice(oldElIdx, 1);
      } else {
        tmpArr = [...state.completedTodo, action.payload];
      }
      state.completedTodo = tmpArr;
    },
  },
});

export const { updateCompletedTodos, addCompletedTodo } =
  completedTodoSlice.actions;
export default completedTodoSlice.reducer;
