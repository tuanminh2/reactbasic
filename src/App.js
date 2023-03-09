import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todolist from "./page/todolist.js";
import Header from "./components/global/Header";

import { Alert } from "./components/alert/Alert.js";
import Login from "./page/login.js";
import IndexPage from "./page/index.js";
import Navbar from "./components/navbar/Navbar.js";
import SideBar from "./components/sidebar/SideBar.js";
import Register from "./page/register.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Alert></Alert>
        <Navbar></Navbar>
        <SideBar />

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/todo" element={<Todolist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
