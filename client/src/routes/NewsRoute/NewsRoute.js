import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NewsPage from "../../pages/NewsPages";
import About from "../../pages/About";

class NewsRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={NewsPage} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default NewsRoute;
