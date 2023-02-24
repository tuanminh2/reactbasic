import React from "react";
import { ThemeContext } from "../components/context/ThemeContextProvider";
import OtherTodoTable from "../components/othertodo/OtherTodoTable";
class Othertodos extends React.Component {
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
        <h1 style={{ color: theme.bodyTextColor }}>Other todo </h1>
        <OtherTodoTable></OtherTodoTable>
      </div>
    );
  }
}

export default Othertodos;
