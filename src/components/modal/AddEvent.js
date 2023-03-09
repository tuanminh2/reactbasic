import React from "react";
import EventModal from "./EventModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/eventSlice";
import moment from "moment";
import { uuidv4 } from "@firebase/util";
const AddEvent = () => {

  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
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
      setAllDay(!allDay);
    }
  };

  const hdlSubmitAddEvent = (event) => {

    const newEvent = {
      id: uuidv4(),
      title,
      textColor: "white",
      backgroundColor: color,
      allDay: allDay,
      start: moment(startDate).format(),
      end: moment(endDate).format(),
    };
    dispatch(addEvent(newEvent));
  };
  return (
    <div>
      <button
        data-modal-target="add-event-modal"
        data-modal-toggle="add-event-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Event
      </button>
      <EventModal
        modalTitle="Add event"
        modalId="add-event-modal"
        startDate={startDate}
        endDate={endDate}
        hdlDateChange={hdlDateChange}
        hdlInputChange={hdlInputChange}
        title={title}
        color={color}
        allDay={allDay}
        action={hdlSubmitAddEvent}
      ></EventModal>
    </div>
  );
};

export default AddEvent;
