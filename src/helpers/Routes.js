import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Timer from '../views/Timer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
        exact
        path='/'
        component={() => <Home />}
        />
        <Route
        exact
        path='/timer'
        component={() => <Timer />}
        />
      </Switch>
    );
  }
}

export default Routes;
