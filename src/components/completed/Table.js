import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { connect } from "react-redux";

import { getAPI } from "../../utils/fetchData";
class Table extends Component {
  static contextType = ThemeContext;

  render() {
    const { active } = this.context;
    const theme = this.context[active];
    console.log("====>", this.props.completedTodo);
    if (this.props.completedTodo && this.props.completedTodo.length > 0) {
      return (
        <table
          style={{
            backgroundColor: theme.tableColor,
            maxWidth: "800px !important",
          }}
          className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300"
        >
          <thead>
            <tr>
              <th className="border border-slate-300 ">Task</th>
              <th className="border border-slate-300 ">Start</th>
              <th className="border border-slate-300 ">End</th>
              <th className="border border-slate-300 ">Time taking</th>
              <th className="border border-slate-300 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.completedTodo.map((item, index) => {
              const newStartDate = new Date(item.startTime);
              const newEndDate = new Date(item.endTime);
              return (
                <tr>
                  <td className="border border-slate-300 text-center">
                    {item.name}
                  </td>

                  <td className="border border-slate-300 text-center">
                    {newStartDate.getHours()}:{newStartDate.getMinutes()}:
                    {newStartDate.getSeconds()}
                  </td>
                  <td className="border border-slate-300 text-center">
                    {newEndDate.getHours()}:{newEndDate.getMinutes()}:
                    {newEndDate.getSeconds()}
                  </td>
                  <td className="border border-slate-300 text-center">1</td>
                  <td className="border border-slate-300 w-1">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else return <p style={{ textAlign: "center" }}>Nothing to show </p>;
  }
}
const mapStateToProps = (state) => ({
  completedTodo: state.completedTodoSlice.completedTodo,
});



export default connect(mapStateToProps)(Table);
