import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Todo from "../todo/todo";
import About from "../about/about";
import Menu from "../template/menu";

const App = props => {
  return (
    <div className="container">
      <Menu />
      <Todo />
      <About />
    </div>
  );
};

export default App;
