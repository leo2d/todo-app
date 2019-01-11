import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Routes from "../main/routes";
import { HashRouter } from 'react-router-dom'
import Menu from "../template/menu";

const App = props => {
  return (
    <HashRouter>
      <div className="container">
        <Menu />
        <Routes />
      </div>
    </HashRouter>
  );
};

export default App;
