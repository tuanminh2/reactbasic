import React from "react";
import AddEvent from "../modal/AddEvent";
import Calendar from "../calendar/Calendar";
import ByClickEventModal from "../modal/ByClickEventModal";
import EditEvent from "../modal/EditEvent";
const Main = () => {
  return (
    <div
      class="p-1 sm:ml-56 border-2 border-yellow-600   mt-14"

    >
      <div style={{ width: "100%" }} class=" flex items-center  mb-2  ">
        <AddEvent />
        <EditEvent></EditEvent>
        <ByClickEventModal></ByClickEventModal>
      </div>
      <div
        style={{ width: "100%" }}
        class=" flex items-center  mb-4  bg-gray-50 "
      >
        <Calendar></Calendar>
  
      </div>
    </div>
  );
};

export default Main;
