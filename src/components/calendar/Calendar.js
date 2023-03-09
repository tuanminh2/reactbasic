import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { setSelectedEvent } from "../../redux/eventSlice";
import { useSelector } from "react-redux";
import ByClickEventModal from "../modal/ByClickEventModal";
import { useDispatch } from "react-redux";
const Calendar = () => {
  const { events } = useSelector((state) => state.eventSlice);
  const dispatch = useDispatch();
  const eventClassNames = function (arg) {
    if (arg.event.allDay) {
      return ["alldayeventstyle"];
    } else {
      return [""];
    }
  };

  const hdlEventClick = (info) => {
    const event = events.find((e) => e.id === info.event.id);
    dispatch(setSelectedEvent(event));
    document.getElementById("showActionFormBtn").click();
  };
  return (
    <>
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
        eventClick={hdlEventClick}
        dayMaxEvents={2}
      ></FullCalendar>
    </>
  );
};

export default Calendar;
