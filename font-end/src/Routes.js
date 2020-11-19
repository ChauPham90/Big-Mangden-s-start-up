import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Dashboard from "./user/UserDashboard";
import PrivateRoute from "./state/privateRoute";

import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute
          path="/dashboard"
          exact
          component={Dashboard}
        ></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
