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
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);

    this.refresh();
  }

  refresh(description) {
    const search = description ? `&description__regex=/${description}/` : "";
    axios.get(`${url}?sort=-createdAt${search}`).then(resp =>
      this.setState({
        ...this.state,
        description: description || "",
        list: resp.data
      })
    );
  }

  handleClearFilter() {
    this.refresh();
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${url}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description));
  }
  handleMarkAsPending(todo) {
    axios
      .put(`${url}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description));
  }
  handleRemove(todo) {
    axios
      .delete(`${url}/${todo._id}`)
      .then(resp => this.refresh(this.state.description));
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
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd}
          handleClearFilter={this.handleClearFilter}
        />
        <TodoList
          list={this.state.list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}
