import { Component } from "react";
import FormInput from "../components/todolist/FormInput";
import List from "../components/todolist/List";
import Footer from "../components/todolist/Footer";
import ToggleThemeBtn from "../components/todolist/ToggleThemeBtn";
import { ThemeContext } from "../context/ThemeContextProvider";

class todolist extends Component {
  static contextType = ThemeContext;
  render() {
    const { active } = this.context;
    const theme = this.context[active];

    return (
      <div
        className=""
        style={{
          borderTop: "2px solid crimson",
          backgroundColor: theme.bodyColor,
          color: theme.bodyTextColor,
          height: "1000px",
        }}
      >
        <div className="App" style={{ backgroundColor: theme.todoColor }}>
          <h1
            id="todolistH1"
            style={{
              color: theme.bodyTextColor,
              fontSize: "1.2rem",
              textShadow: "2px 2px 8px #FF0000",
            }}
          >
            To do list
          </h1>
          <FormInput></FormInput>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default todolist;
