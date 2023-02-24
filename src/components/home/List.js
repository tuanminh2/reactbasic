import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { updateTodos } from "../../redux/todoSlice";
import { addCompletedTodo } from "../../redux/completedTodoSlice";

class List extends Component {
  switchComplete = (id) => {
    let newTodos = [...this.props.todos];
    newTodos = newTodos.map((todo) => {
      console.log(id, "  ", todo.id);
      if (todo.id === id) {
        todo = { ...todo, complete: !todo.complete };
        this.props.addCompletedTodo(todo);
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
});

const mapDispatchToProps = { updateTodos, addCompletedTodo };

export default connect(mapStateToProps, mapDispatchToProps)(List);
