import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { updateTodos } from "../redux/todoSlice";
class List extends Component {
  switchComplete = (id) => {
    let newTodos = [...this.props.todos];
    newTodos = newTodos.map((todo, index) => {
      if (index === id) {
        todo = { ...todo, complete: !todo.complete };
        return todo;
      }
      return todo;
    });
    this.props.updateTodos(newTodos);
  };

  hdlEditTodos = (editValue, id) => {
    let newTodos = [...this.props.todos];

    newTodos = newTodos.map((todo, index) => {
      if (index === id) {
        todo = { ...todo, name: editValue };

        return todo;
      }
      return todo;
    });

    this.props.updateTodos(newTodos);
  };

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos &&
          todos.length &&
          todos.map((todo, index) => {
            if (Object.keys(todo).length > 0) {
              return (
                <ListItem
                  hdlEditTodos={this.hdlEditTodos}
                  todo={todo}
                  key={index}
                  id={index}
                  checkComplete={this.switchComplete}
                />
              );
            }
          })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoSlice.todos,
});

const mapDispatchToProps = { updateTodos };

export default connect(mapStateToProps, mapDispatchToProps)(List);
