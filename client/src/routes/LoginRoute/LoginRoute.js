import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../../pages/Login";

class LoginRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default LoginRoute;
