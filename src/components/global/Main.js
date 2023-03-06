import React from "react";

const Main = () => {
  return (

    
        <div class="p-1 sm:ml-64 border-2 border-yellow-600   dark:border-gray-700 mt-14">
          <div style={{ border: "2px solid red" }} class="grid grid-cols-3 gap-4 mb-4 mt-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            
          </div>
          <div style={{ border: "2px solid blue" }} class="h-72 flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div style={{ border: "2px solid green" }}class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
           
           
          </div>

        </div>
  

  );
};

export default Main;
