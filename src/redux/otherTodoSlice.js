import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const getOtherTodos = createAsyncThunk(
  "fetch_othertodos",
  async (thunkAPI) => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");


      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export const otherTodoSlice = createSlice({
  name: "xyz",
  initialState: {
    otherTodos:
      JSON.parse(sessionStorage.getItem("othjer")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("todos")),
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOtherTodos.fulfilled, (state, action) => {
      state.otherTodos = action.payload;
    });
  },
});

export const {} = otherTodoSlice.actions;
export default otherTodoSlice.reducer;
