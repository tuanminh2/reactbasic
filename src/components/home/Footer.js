import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodos } from "../../redux/todoSlice";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = { checkAll: false };
  }

  hdlCheckAll = () => {
    const { todos } = this.props;
    let newTodos = [...todos];
    newTodos = newTodos.map((todo) => {
      return (todo = { ...todo, complete: !this.state.checkAll });
    });
    this.props.updateTodos(newTodos);
    this.setState({ checkAll: !this.state.checkAll });
  };

  deleteTodo = () => {
    const { todos } = this.props;
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });

    this.props.updateTodos(newTodos);

  
    console.log(todos)
    this.setState({ checkAll: false });
  };

  render() {
    const { todos } = this.props;

    return (
      <>
        {todos.length === 0 ? (
          <h2>All Done</h2>
        ) : (
          <>
            {todos.className}
            <div className="row">
              <label htmlFor="">
                <input type="checkbox" name="all" onClick={this.hdlCheckAll} />
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

});

const mapDispatchToProps = { updateTodos };

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
