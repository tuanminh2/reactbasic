import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    light: {
      headerColor: "#e4e4e4",
      bodyColor: "#eeeeee",

      todoColor: "white",

      tableColor: "white",

      headerTextColor: "black",
      bodyTextColor: "black",
    },
    dark: {
      headerColor: "#01316e",
      bodyColor: "#01316e",

      todoColor: "#362e2e",
      tableColor: "#362e2e",

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
