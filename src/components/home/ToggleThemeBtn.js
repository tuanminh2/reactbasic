import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import "./ToggleThemeBtn.css";
class ToggleThemeBtn extends Component {
  static contextType = ThemeContext;

  hdlChangeTheme() {

    if (this.context.active == "light") {
      this.context.changeTheme("dark");
    } else if (this.context.active == "dark") {
      this.context.changeTheme("light");
    }

  }
  render() {
    return (
      <label className="switch">
        <input id="themeCb" type="checkbox" onChange={() => this.hdlChangeTheme()} />
        <div className="slider"> </div>
      </label>
    );
  }
}
export default ToggleThemeBtn;
