import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Id from "./pages/[id]";
import SourceCode from "./components/source-code";
import "./App.css";

const App = () => {
  return (
    <div>
      <SourceCode />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Id />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
