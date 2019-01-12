import React, { Component } from "react";
import Pageheader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import HttpService from "../services/HttpService";
import axios from "axios";

const url = "http://127.0.0.1:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { description: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.refresh();
  }

  refresh() {
    axios
      .get(`${url}?sort=-createdAt`)
      .then(resp =>
        this.setState({ ...this.state, description: "", list: resp.data })
      );
  }

  handleRemove(todo) {
    axios.delete(`${url}/${todo._id}`).then(resp => this.refresh());
  }
  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }
  handleAdd() {
    const description = this.state.description;
    axios.post(url, { description }).then(resp => this.refresh());
  }
  render() {
    return (
      <div>
        <Pageheader name="Tasks" small="Registers" />
        <TodoForm
          value={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
