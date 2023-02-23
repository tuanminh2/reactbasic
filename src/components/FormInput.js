import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodos } from "../redux/todoSlice";

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
    console.log(this.props)
    this.props.updateTodos([
      ...this.props.todos,
      { name: this.todoInput.current.value, complete: false },
    ]);

    this.todoInput.current.focus();
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
});

const mapDispatchToProps = { updateTodos };

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
