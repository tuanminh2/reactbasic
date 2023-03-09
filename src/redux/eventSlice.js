import { createSlice } from "@reduxjs/toolkit";
export const eventSlice = createSlice({
  name: "abc",
  initialState: {
    events:
      JSON.parse(sessionStorage.getItem("events")) == null
        ? []
        : JSON.parse(sessionStorage.getItem("events")),

    selectedEvent: JSON.parse(sessionStorage.getItem("selectedEvent")) == null
      ? {}
      : JSON.parse(sessionStorage.getItem("selectedEvent")),

  },
  reducers: {
    addEvent: (state, action) => {
      state.events = [...state.events, action.payload];
      sessionStorage.setItem("events", JSON.stringify(state.events));
    },
    setSelectedEvent: (state, action) => {

      state.selectedEvent = action.payload;
      sessionStorage.setItem("selectedEvent", JSON.stringify(state.selectedEvent));
    },

    updateSelectedEvent: (state, action) => {

      const updateEvents = state.events.map((e) => {

        return e.id == action.payload.id ? action.payload : e;
      });
      state.events = [...updateEvents];
      sessionStorage.setItem("events", JSON.stringify(state.events));
    },

    deleteEvent: (state, action) => {
      const newEvents = state.events.filter((e) => e.id != action.payload);
      state.events = [...newEvents]
      state.selectedEvent = {}
      sessionStorage.setItem("events", JSON.stringify(state.events));
      sessionStorage.setItem("selectedEvent", JSON.stringify(state.selectedEvent));
    }
  },
});

export const { addEvent, setSelectedEvent, updateSelectedEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
