import React from "react";
import "./App.css";
import Homescreen from "./Homescreen";
import WrappedComponent from "./WrappedComponent";
import UserDemo from './UserCrud';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/" render={props => <Homescreen />} />
          <Route
            exact
            path="/hoc"
            render={props => {
              return <WrappedComponent />;
            }}
          />
          <Route
            exact
            path="/reducer"
            render={props => {
              return <UserDemo />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
