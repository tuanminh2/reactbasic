import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home.js";
import Header from "./components/global/Header";
import Completed from "./page/completed.js";
import Othertodos from "./page/othertodos.js";
import { Alert } from "./components/alert/Alert.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Alert></Alert>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/othertodos" element={<Othertodos />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
