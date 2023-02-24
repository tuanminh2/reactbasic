import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { connect } from "react-redux";

import { getOtherTodos } from "../../redux/otherTodoSlice";
class OtherTodoTable extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    if (this.props.otherTodos.length==0) {
      console.log("-----")
      this.props.getOtherTodos();
    }
  }

  render() {
    console.log("first render");
    const { active } = this.context;
    const theme = this.context[active];
    return <>abc</>;
    // if (this.props.completedTodo.length > 0) {
    //   return (
    //     <table
    //       style={{
    //         backgroundColor: theme.tableColor,
    //         maxWidth: "800px !important",
    //       }}
    //       className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300"
    //     >
    //       <thead>
    //         <tr>
    //           <th className="border border-slate-300 ">Task</th>
    //           <th className="border border-slate-300 ">Start</th>
    //           <th className="border border-slate-300 ">End</th>
    //           <th className="border border-slate-300 ">During</th>
    //           <th className="border border-slate-300 ">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {this.props.completedTodo.map((item, index) => (
    //           <tr>
    //             <td className="border border-slate-300 ">{item.name}</td>

    //             <td className="border border-slate-300 ">1</td>
    //             <td className="border border-slate-300 ">1</td>
    //             <td className="border border-slate-300 ">1</td>
    //             <td className="border border-slate-300 w-1">
    //               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   );
    // } else return <p style={{ textAlign: "center" }}>Nothing to show </p>;
  }
}


const mapStateToProps = (state) => ({
  otherTodos: state.otherTodoSlice.otherTodos,
});

const mapDispatchToProps = { getOtherTodos };

export default connect(mapStateToProps, mapDispatchToProps)(OtherTodoTable);
