import { createSlice } from "@reduxjs/toolkit";
export const completedTodoSlice = createSlice({
  name: "def",
  initialState: {
    completedTodo:
      JSON.parse(sessionStorage.getItem("todayCompletedTodos")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("todayCompletedTodos")),
    checkAll:
      typeof sessionStorage.getItem("checkAll") === "undefined"
        ? false
        : JSON.parse(sessionStorage.getItem("checkAll")),
  },
  reducers: {
    addCompletedTodo: (state, action) => {
      let tmpArr = [...state.completedTodo];

      let oldElIdx = tmpArr.findIndex((el) => el.id == action.payload.id);
      if (oldElIdx !== -1) {
        tmpArr.splice(oldElIdx, 1);
      } else {
        tmpArr = [
          ...state.completedTodo,
          { ...action.payload, endTime: new Date() },
        ];
      }
      state.completedTodo = tmpArr;
      sessionStorage.setItem(
        "todayCompletedTodos",
        JSON.stringify(state.completedTodo)
      );
    },

    updateCheckAll: (state, action) => {
      state.checkAll = action.payload;
      sessionStorage.setItem("checkAll", JSON.stringify(state.checkAll));
    },
  },
});

export const { addCompletedTodo, updateCheckAll } = completedTodoSlice.actions;
export default completedTodoSlice.reducer;
