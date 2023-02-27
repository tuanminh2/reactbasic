import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodos } from "../../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { updateCheckAll } from "../../redux/completedTodoSlice";
class FormInput extends Component {
  constructor(props) {
    super(props);
    this.todoInput = React.createRef();
  }

  componentDidUpdate() {
    this.todoInput.current.focus();
  }

  addTodo = (e) => {
    e.preventDefault();

    const startDate = new Date();

    this.props.updateTodos([
      ...this.props.todos,
      {
        id: uuidv4(),
        name: this.todoInput.current.value,
        complete: false,
        startTime: startDate,
      },
    ]);

    this.todoInput.current.focus();
    if (this.props.checkAll) {
      this.props.updateCheckAll(false);
    }
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.addTodo}>
        <input
          ref={this.todoInput}
          type="text"
          name="todos"
          id="todos"
          placeholder="Learn something"
          required
        />
        <button type="submit">Create</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoSlice.todos,
  checkAll: state.completedTodoSlice.checkAll,
});

const mapDispatchToProps = { updateTodos, updateCheckAll };

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
