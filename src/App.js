import React, { useState, useEffect } from "react";
import axios from "axios";
import getWeather from "./getWeather";
import Logo from "./assets/logo.png";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=d90cd3aecf1b462ca5b352334f6616a5"
      )
      .then((res) => setLocation(res.data.country))
      .catch(() => console.log("Something went wrong!"));
  }, []);

  useEffect(() => {
    var query = location;
    getWeather({ query, setWeather, setLoading });
  }, [location]);

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Weather App</h1>
        <input
          className="search"
          type="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              getWeather({ query, setWeather, setLoading });
          }}
        />
      </div>
      <div className="data">
        {loading ? (
          "loading..."
        ) : (
          <div className="data-top">
            <img src={Logo} alt="YUY" title="YUY" />
            <div className="location">{weather.name}</div>
            <div className="temp">{Math.round(weather.temp)}°c</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
