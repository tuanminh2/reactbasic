import { Component } from "react";
import Table from "../components/completed/Table";
import { ThemeContext } from "../components/context/ThemeContextProvider";
class Completed extends Component {
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
        <h1 style={{ color: theme.bodyTextColor }}>Today's completed todo </h1>
        <Table></Table>

      <div className="fix"></div>
      </div>
    );
  }
}

export default Completed;
