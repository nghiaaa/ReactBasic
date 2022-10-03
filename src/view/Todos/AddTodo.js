import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnclickAddTodo = () => {
    if (!this.state.title) {
      toast.error(`missing title todo!`);
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addnewTodo(todo);
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        <button type="button" onClick={() => this.handleOnclickAddTodo()}>
          add
        </button>
      </div>
    );
  }
}

export default AddTodo;
