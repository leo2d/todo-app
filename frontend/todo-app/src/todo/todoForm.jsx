import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const TodoForm = props => {
  const keyHandler = event => {
    if (event.key === "Enter") {
      event.shiftKey ? props.handleAdd() : props.handleSearch();
    } else if (event.key === "Escape") {
      props.handleClearFilter();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12, 9, 10">
        <input
          id="description"
          className="form-control"
          placeholder="Add a task"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        />
      </Grid>

      <Grid cols="12, 3, 2">
        <IconButton styles="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton
          styles="success"
          icon="search"
          onClick={props.handleSearch}
        />
        <IconButton
          styles="primary"
          icon="close"
          onClick={props.handleClearFilter}
        />
      </Grid>
    </div>
  );
};

export default TodoForm;
