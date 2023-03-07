import React from "react";
import EventModal from "./EventModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/eventSlice";
import moment from "moment";
const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allDay, setAllDay] = useState(false);

  const dispatch = useDispatch();
  const hdlDateChange = (startOrEnd) => (event) => {
    if (!allDay) {
      if (startOrEnd === "startdate") {
        setStartDate(event);
      }
      if (startOrEnd === "enddate") {
        setEndDate(event);
      }
    } else {
      setStartDate(event);
      setEndDate(event);
    }
  };

  const hdlInputChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "color") {
      setColor(event.target.value);
    } else if (event.target.name === "allDay") {
      setAllDay(Boolean(event.target.value));
    }
  };

  const hdlSubmitAddEvent = (event) => {
    const newEvent = {
      title,
      textColor: "white",
      backgroundColor: color,
      borderColor: "white",
      allDay: allDay,
      start: startDate,
      end: endDate,
    };
    dispatch(addEvent(newEvent));
  };
  return (
    <div>
      <button
        data-modal-target="add-event-form"
        data-modal-toggle="add-event-form"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Event
      </button>
      <EventModal
        startDate={startDate}
        endDate={endDate}
        hdlDateChange={hdlDateChange}
        hdlInputChange={hdlInputChange}
        title={title}
        color={color}
        allDay={allDay}
        hdlSubmitAddEvent={hdlSubmitAddEvent}
      ></EventModal>
    </div>
  );
};

export default AddEvent;
