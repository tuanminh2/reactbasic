import React, { Component } from "react";

class ListItem extends Component {
  state = {
    onEdit: false,
    editValue: this.props.todo.name,
  };
  hdlOnEdit = () => {
    let temp = { ...this.state };
    temp = { ...temp, onEdit: true };
    this.setState(temp);
  };

  setEditValue = (newEditValue) => {
    let temp = { ...this.state };
    temp = { ...temp, editValue: newEditValue };
    this.setState(temp);
  };
  hdlSave = (id) => {
    let temp = { ...this.state };
    temp = { ...temp, onEdit: false };
    this.setState(temp);
    if (this.state.editValue) {
      this.props.hdlEditTodos(this.state.editValue, id);
    } else {
      let temp1 = { ...this.state };
      temp1 = { ...temp, editValue: this.props.todo.name };
      this.setState(temp1);
    }
  };

  render() {
    const { todo, id, checkComplete } = this.props;

    if (this.state.onEdit) {
      return (
        <li>
          <input
            style={{ border: "1px solid black", width: "80%" }}
            type="text"
            id="editValue"
            value={this.state.editValue}
            onChange={(e) => this.setEditValue(e.target.value.toLowerCase())}
          />
          <button onClick={() => this.hdlSave(id)}>save</button>
        </li>
      );
    } else {
      return (
        <li>
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
            <input
              type="checkbox"
              id={id}
              onChange={() => checkComplete(id)}
              checked={todo.complete}
            />
            {todo.name}
          </label>
          <button disabled={todo.complete} onClick={this.hdlOnEdit}>
            Edit
          </button>
        </li>
      );
    }
  }
}

export default ListItem;
