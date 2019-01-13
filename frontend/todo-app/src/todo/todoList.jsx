import React from "react";
import IconButton from "../template/iconButton";

const TodoList = props => {
  const renderRows = () => {
    const lines = props.list || [];
    return lines.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            hide={todo.done}
            styles="success"
            icon="check"
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            hide={!todo.done}
            styles="primary"
            icon="undo"
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            styles="warning"
            icon="edit"
            onClick={() => window.alert("edit")}
          />
          <IconButton
            styles="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table tableActions">
      <thead>
        <tr>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default TodoList;
