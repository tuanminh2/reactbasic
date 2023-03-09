import React from "react";
import EventModal from "./EventModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/eventSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { updateSelectedEvent } from "../../redux/eventSlice";
const EditEvent = () => {

  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allDay, setAllDay] = useState(false);

  const dispatch = useDispatch();


  const { events, selectedEvent } = useSelector((state) => state.eventSlice);
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

  const hdlSubmitUpdateEvent = () => {

    const newEvent = {
      id: selectedEvent.id,
      title,
      textColor: "white",
      backgroundColor: color,
      allDay: allDay,
      start: moment(startDate).format(),
      end: moment(endDate).format(),
    };
    dispatch(updateSelectedEvent(newEvent));
  };



  useEffect(() => {

    if (Object.keys(selectedEvent).length) {
      let color = selectedEvent.backgroundColor

      setColor(color)
      setTitle(selectedEvent.title)
      setAllDay(selectedEvent.allDay)
      let start = `${moment(new Date(selectedEvent.start)).format()}`
      let end = ''
      if (!selectedEvent.allDay) {
        console.log(selectedEvent)


        end = `${moment(new Date(selectedEvent.end)).format()}`
      } else {


        end = `${moment(new Date(selectedEvent.end)).format("YYYY-MM-DD")}`
      }

      setStartDate(new Date(start))
      setEndDate(new Date(end))
    }
  }, [selectedEvent, events]);
  return (
    <div>

      <EventModal
        modalTitle="Edit event"
        modalId="edit-event-modal"
        startDate={startDate}
        endDate={endDate}
        hdlDateChange={hdlDateChange}
        hdlInputChange={hdlInputChange}
        title={title}
        color={color}
        allDay={allDay}
        action={hdlSubmitUpdateEvent}
      ></EventModal>
    </div>
  );
};

export default EditEvent;
