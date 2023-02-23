import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { connect } from "react-redux";
import { updateCompletedTodos } from "../../redux/completedTodoSlice";
class Table extends Component {
  static contextType = ThemeContext;
  render() {
    const { active } = this.context;
    const theme = this.context[active];

    if (this.props.completedTodo.length > 0) {
      return (
        <table
          style={{ backgroundColor: theme.tableColor }}
          className="w-3/5 mx-auto border-collapse border border-slate-400 "
        >
          <thead>
            <tr>
              <th className="border border-slate-300 ">Id</th>
              <th className="border border-slate-300 ">Task</th>
              <th className="border border-slate-300 ">Start</th>
              <th className="border border-slate-300 ">End</th>
              <th className="border border-slate-300 ">During</th>
              <th className="border border-slate-300 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.completedTodo.map((item, index) => (
              <tr>
                <td className="border border-slate-300 ">item.task</td>
                <td className="border border-slate-300 ">1</td>
                <td className="border border-slate-300 ">1</td>
                <td className="border border-slate-300 ">1</td>
                <td className="border border-slate-300 ">1</td>
                <td className="border border-slate-300 w-1">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else
      return (
        <p style={{ textAlign:"center"}}>Nothing to show</p>
      );
  }
}
const mapStateToProps = (state) => ({
  completedTodo: state.completedTodoSlice.completedTodo,
});

const mapDispatchToProps = { updateCompletedTodos };

export default connect(mapStateToProps, mapDispatchToProps)(Table);
