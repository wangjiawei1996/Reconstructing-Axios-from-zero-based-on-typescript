import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" exact component={LoginPage}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
};
