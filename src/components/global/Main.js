import React from "react";
import Calendar from "../calendar/Calendar";
const Main = () => {
  return (
    <div class="p-1 sm:ml-64 border-2 border-yellow-600   dark:border-gray-700 mt-14">
      <div
        style={{ border: "2px solid blue" , width:"100%"}}
        class=" flex items-center  mb-4  bg-gray-50 dark:bg-gray-800"
      >
        <Calendar></Calendar>
      </div>
    </div>
  );
};

export default Main;
