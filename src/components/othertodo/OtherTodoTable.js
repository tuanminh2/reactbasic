import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { connect } from "react-redux";
import Pagination from "../global/Pagination";
import { getOtherTodos } from "../../redux/otherTodoSlice";
class OtherTodoTable extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    if (this.props.otherTodos.length == 0) {
      this.props.getOtherTodos("limit=5&skip=0");
    }
  }
  //can not call this in child functionalcomponent
  // hdlPagination(num) {
  //   this.props.getOtherTodos(num);
  // }
  //can not call this in child functionalcomponent
  render() {

    const { active } = this.context;
    const theme = this.context[active];
    //can not call this in child functionalcomponent=>fix
    const hdlPagination = (page) => {
      page = Number(page) * 1 || 1;
      let limit = 5;
      let skip = (page - 1) * limit;
      let searchStr = `limit=${limit}&skip=${skip}`;
      this.props.getOtherTodos(searchStr);
    };
    //can not call this in child functionalcomponent=>fix

    if (this.props.otherTodos && this.props.otherTodos.length > 0) {
      return (
        <div className="otherTodos">
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
          <div className="flex justify-center">
            <Pagination total={6} callback={hdlPagination}></Pagination>
          </div>
        </div>
      );
    } else return <p style={{ textAlign: "center" }}>Nothing to show </p>;
  }
}

const mapStateToProps = (state) => ({
  otherTodos: state.otherTodoSlice.otherTodos,
});

const mapDispatchToProps = { getOtherTodos };

export default connect(mapStateToProps, mapDispatchToProps)(OtherTodoTable);
