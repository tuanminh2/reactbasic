import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Calendar = () => {
  return (
    <FullCalendar
      plugins={[daygridPlugin, timegridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth, timeGridWeek, timeGridDay",
      }}
      initialView="dayGridMonth"
    ></FullCalendar>
  );
};

export default Calendar;
