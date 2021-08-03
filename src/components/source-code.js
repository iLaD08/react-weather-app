import React from "react";
import GithubIcon from "../assets/github.png";

const SourceCode = () => (
  <a
    href="https://github.com/iLaD08/react-weather-app"
    target="_blank"
    rel="noreferrer"
  >
    <div className="source-code">
      <img src={GithubIcon} alt="" />
      <h3>Source code</h3>
    </div>
  </a>
);

export default SourceCode;
