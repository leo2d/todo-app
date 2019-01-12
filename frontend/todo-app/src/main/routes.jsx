import React from 'react';
import {Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Todo from '../todo/todo';
import About from '../about/about';

const Routes = props => (
    <div>
        <Switch>
            <Route exact path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from="*" to="/todos" />
        </Switch>
    </div>
);

export default Routes;
