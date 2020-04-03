import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import LoginPage from "../pages/Login";
import IntroPage from "../pages/Intro";
import FramePage from "../pages/Frame";

function RootRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/frame" component={FramePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RootRoutes;
