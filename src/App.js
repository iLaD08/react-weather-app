import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Id from "./pages/[id]";
import GithubIcon from "./assets/github.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Id />
        </Route>
      </Switch>
      <a
        href="https://github.com/iLaD08/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <img className="github-icon" src={GithubIcon} alt="" />
      </a>
    </div>
  );
};

export default App;
