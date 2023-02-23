import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home.js";
import Header from "./components/global/Header";
import Completed from "./page/completed.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter >
        {/* <Alert></Alert> */}
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
        {/* <Footer></Footer>  */}
      </BrowserRouter>
    );
  }
}

export default App;
