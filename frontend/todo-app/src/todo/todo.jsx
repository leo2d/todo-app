import React, { Component } from "react";
import Pageheader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";


export default class Todo extends Component {
  render() {
    return (
      <div>
        <Pageheader name="Tasks" small="Registers" />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
