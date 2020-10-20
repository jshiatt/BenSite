import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import router from "./ui/router";
import { Dashboard } from "./ui/routes";
function App() {
  return (
    <div>
      <div>hello</div>
      <Router>
        <Switch>
          <Redirect exact path="/" to={router.dashboard.path()} />
          <Route path={router.dashboard.path()} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
