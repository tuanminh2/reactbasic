import React from "react";
import AddEvent from "../modal/AddEvent";
import Calendar from "../calendar/Calendar";
import ByClickEventModal from "../modal/ByClickEventModal";
import EditEvent from "../modal/EditEvent";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
const Main = () => {
  const themeState = useContext(ThemeContext);
  console.log("Theme State", themeState);
  const theme = themeState[themeState.active];

  const calendarColor = themeState.active == "light" ? "white" : "#1C82AD";
  return (
    <div
      style={{
        backgroundColor: theme["bodyColor"],
      }}
      class="p-1 sm:ml-56 border-2   mt-14"
    >
      <div style={{ width: "100%" }} class=" flex items-center  mb-2  ">
        <AddEvent />
        <EditEvent></EditEvent>
        <ByClickEventModal></ByClickEventModal>
      </div>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          backgroundColor: calendarColor,
          color: theme["bodyTextColor"],
        }}
        class=" flex items-center  mb-4   "
      >
        <Calendar></Calendar>
      </div>
    </div>
  );
};

export default Main;
