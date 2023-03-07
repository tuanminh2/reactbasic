import { createSlice } from "@reduxjs/toolkit";
export const eventSlice = createSlice({
  name: "abc",
  initialState: {
    events:
      JSON.parse(sessionStorage.getItem("events")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("events")),
  },
  reducers: {
    addEvent: (state, action) => {
      state.events = [...state.events, action.payload];
      sessionStorage.setItem("events", JSON.stringify(state.events));
    },
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
