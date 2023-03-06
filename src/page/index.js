import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Main from "../components/global/Main";
import Navbar from "../components/navbar/Navbar";
const index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SideBar />

      <Main ></Main>
    </div>
  );
};

export default index;
