import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const getOtherTodos = createAsyncThunk(
  "fetch_othertodos",
  async (thunkAPI ) => {

    try {
      const res = await axios.get("https://dummyjson.com/todos");

      console.log(res);
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
      JSON.parse(sessionStorage.getItem("othertodos")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("othertodos")),
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOtherTodos.fulfilled, (state, action) => {
      state.otherTodos = action.payload;
    });
  },
});


export default otherTodoSlice.reducer;
