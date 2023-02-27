import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { connect } from "react-redux";

import { getOtherTodos } from "../../redux/otherTodoSlice";
class OtherTodoTable extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    if (this.props.otherTodos.length == 0) {
      this.props.getOtherTodos();
    }
  }

  render() {
    console.log("first render");
    const { active } = this.context;
    const theme = this.context[active];

    if (this.props.otherTodos && this.props.otherTodos.length > 0) {
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
              <th className="border border-slate-300 ">Id</th>
              <th className="border border-slate-300 ">Todo</th>
              <th className="border border-slate-300 ">UserId</th>
              <th className="border border-slate-300 ">Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.props.otherTodos.map((item, index) => (
              <tr>
                <td className="border border-slate-300 ">{item.id}</td>
                <td className="border border-slate-300 ">{item.todo}</td>
                <td className="border border-slate-300 ">{item.userId}</td>
                <td className="border border-slate-300 ">
                  {item.completed ? "true" : "false"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else return <p style={{ textAlign: "center" }}>Nothing to show </p>;
  }
}

const mapStateToProps = (state) => ({
  otherTodos: state.otherTodoSlice.otherTodos,
});

const mapDispatchToProps = { getOtherTodos };

export default connect(mapStateToProps, mapDispatchToProps)(OtherTodoTable);
