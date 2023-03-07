import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

import axios from "axios";

export const getOtherTodos = createAsyncThunk(
  "fetch_othertodos",
  async ( searchStr , thunkAPI) => {
   
    try {
      thunkAPI.dispatch({ type: "ALERT", payload: { loading: true } });
      const res = await axios.get(
        `https://dummyjson.com/todos?${searchStr}`
      );
      console.log(res);
      thunkAPI.dispatch({ type: "ALERT", payload: { loading: false } });
      return res.data.todos;
    } catch (err) {
      thunkAPI.dispatch({ type: "ALERT", payload: { error: err.message } });
    }
  }
);

export const otherTodoSlice = createSlice({
  name: "xyz",
  initialState: {
    otherTodos:
      JSON.parse(sessionStorage.getItem("othertodos")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("othertodos")),
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOtherTodos.fulfilled, (state, action) => {
      console.log("ACTION PAYLOAD", action.payload);
      state.otherTodos = action.payload;
    });
  },
});

export default otherTodoSlice.reducer;
