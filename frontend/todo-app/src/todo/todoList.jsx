import React from "react";
import IconButton from "../template/iconButton";

const TodoList = props => {
  const renderRows = () => {
    const lines = props.list || [];
    return lines.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <IconButton
            styles="warning"
            icon="edit"
            onClick={() => window.alert("edit")}
          />
          <IconButton
            styles="danger"
            icon="trash"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
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
