import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import DataContextProvider from "./components/DataProvider";
import { Component } from "react";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <div className="App">
          <h1>To do list </h1>
          <FormInput></FormInput>

          <List></List>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
