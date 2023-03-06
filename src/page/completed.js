import { Component } from "react";
import Table from "../components/completed/Table";
import { ThemeContext } from "../context/ThemeContextProvider";
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
        <div className="justify-center w-100 ">
          <button
            style={{ marginLeft: "1000px" }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Save for today
          </button>
        </div>
      </div>
    );
  }
}

export default Completed;
