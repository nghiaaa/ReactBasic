import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "making videos" },
      { id: "todo3", title: "fix bugs" },
    ],
    editTodos: {},
  };
  addnewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.info("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodo,
    });
    toast.success("sussess!");
  };
  handleEditTodo = (todo) => {
    this.setState({
      editTodos: todo,
    });
  };
  render() {
    let { ListTodos, editTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;

    return (
      <div className="list-todo-container">
        <AddTodo addnewTodo={this.addnewTodo} />
        <div className="list-todo-content">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span className="title">
                      {index + 1}-{item.title}
                    </span>
                  ) : (
                    <>
                      {editTodos.id === item.id ? (
                        <span>
                          {index + 1}- <input value={editTodos.value} />
                        </span>
                      ) : (
                        <span>
                          {index + 1}-{item.title}
                        </span>
                      )}
                    </>
                  )}

                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
