import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { useSelector } from "react-redux";
const Calendar = () => {
  const { events } = useSelector((state) => state.eventSlice);

  const eventClassNames= function(arg) {
    if (arg.event.allDay) {
      return [ 'alldayeventstyle' ]
    } else {
      return [ '' ]
    }
  }
  return (
    <FullCalendar
      plugins={[daygridPlugin, timegridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth, timeGridWeek, timeGridDay",
      }}
      initialView="dayGridMonth"
      events={events}
      displayEventEnd={true}
      eventDisplay={"block"}
      eventClassNames={eventClassNames}
    ></FullCalendar>
  );
};

export default Calendar;
