import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MovieCard from "../Components/MovieCard/MovieCard";
import App from "../App";
import Description from "../Components/Description";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/description/:name" component={Description} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
