import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { updateTodos } from "../../redux/todoSlice";
import {
  addCompletedTodo,
  updateCheckAll,
} from "../../redux/completedTodoSlice";

class List extends Component {
  switchComplete = (id) => {
    let newTodos = [...this.props.todos];
    newTodos = newTodos.map((todo) => {
      if (todo.id === id) {
        let newVal = !todo.complete;
        if (newVal == false && this.props.checkAll == true) {
          this.props.updateCheckAll(false);
        }

        todo = { ...todo, complete: newVal };
        this.props.addCompletedTodo(todo);

        if (
          newVal == true &&
          this.props.todos.filter((todo) => todo.complete === false).length -
            1 ==
            0
        ) {
          this.props.updateCheckAll(true);
        }
        return todo;
      }
      return todo;
    });
    this.props.updateTodos(newTodos);
  };

  hdlEditTodos = (editValue, id) => {
    let newTodos = [...this.props.todos];

    newTodos = newTodos.map((todo) => {
      if (todo.id === id) {
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
          todos.map((todo, index) => {
            return (
              <ListItem
                hdlEditTodos={this.hdlEditTodos}
                todo={todo}
                key={todo.id}
                id={todo.id}
                checkComplete={this.switchComplete}
              />
            );
          })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoSlice.todos,
  completedTodo: state.completedTodoSlice.completedTodo,
  checkAll: state.completedTodoSlice.checkAll,
});

const mapDispatchToProps = { updateTodos, addCompletedTodo, updateCheckAll };

export default connect(mapStateToProps, mapDispatchToProps)(List);
