import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import "./App.css";
import ArticlesDashboard from "./app/components/ArticlesDashboard";
import Home from "./app/components/Home";

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/articles" component={ArticlesDashboard}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default withRouter(observer(App));
