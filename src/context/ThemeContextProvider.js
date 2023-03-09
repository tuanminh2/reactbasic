import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    light: {
      headerColor: "#E3DFFD",
      bodyColor: "#EEEEEE",

      todoColor: "white",

      tableColor: "white",

      headerTextColor: "black",
      bodyTextColor: "black",
    },
    dark: {

      headerColor: "#13005A",
      bodyColor: "#00337C",

      todoColor: "#01316e",
      tableColor: "#01316e",

      headerTextColor: "white",
      bodyTextColor: "white",
    },
    active: "light",
  };

  changeTheme = (theme) => {
    this.setState({ ...this.state, active: theme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
