import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodos } from "../../redux/todoslices/todoSlice";
import { updateCheckAll } from "../../redux/todoslices/completedTodoSlice";
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  hdlCheckAll = () => {
    const { todos } = this.props;
    let newTodos = [...todos];
    newTodos = newTodos.map((todo) => {
      const newTodo = { ...todo, complete: !this.props.checkAll };

      return newTodo;
    });

    this.props.updateCheckAll(!this.props.checkAll);
    this.props.updateTodos(newTodos);
  };

  deleteTodo = () => {
    const { todos } = this.props;
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });

    this.props.updateTodos(newTodos);

    console.log(todos);
  };

  render() {
    const { todos, checkAll } = this.props;

    return (
      <>
        {todos.length === 0 ? (
          <h2>All Done</h2>
        ) : (
          <>
            {todos.className}
            <div className="row">
              <label htmlFor="">
                {this.props.checkAll && (
                  <input
                    type="checkbox"
                    name="all"
                    checked
                    onClick={this.hdlCheckAll}
                  />
                )}
                {!this.props.checkAll && (
                  <input
                    type="checkbox"
                    name="all"
                    onClick={this.hdlCheckAll}
                  />
                )}
                ALL
              </label>

              <p>
                You have{" "}
                {todos.filter((todo) => todo.complete === false).length} todo
              </p>
              <button id="delete" onClick={this.deleteTodo}>
                Delete
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoSlice.todos,
  checkAll: state.completedTodoSlice.checkAll,
});

const mapDispatchToProps = { updateTodos, updateCheckAll };

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
