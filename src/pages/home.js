import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getLocation from "../actions/getLocation";
import getWeather from "../actions/getWeather";
import WeatherData from "../components/weatherData";

const Home = () => {
  let history = useHistory();

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState({});

  useEffect(() => getLocation({ setLocation }), []);

  useEffect(() => {
    var query = location;
    getWeather({ query, setWeather, setLoading });
  }, [location]);

  return (
    <div className="home">
      <div className="header">
        <h1 className="title">Weather App</h1>
        <input
          className="search"
          type="search"
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") history.push(`/${e.target.value}`);
          }}
        />
      </div>
      <WeatherData loading={loading} weather={weather} />
    </div>
  );
};

export default Home;
