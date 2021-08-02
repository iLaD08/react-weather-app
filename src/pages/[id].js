import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import getWeather from "../actions/getWeather";
import WeatherData from "../components/weatherData";
import Arrow from "../assets/arrow.svg";

const Id = () => {
  let { id } = useParams();
  let history = useHistory();

  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    var query = id;
    getWeather({ query, setWeather, setLoading });
  }, [id]);

  return (
    <div className="home">
      <div className="header">
        <img
          className="back-arrow"
          onClick={() => history.push("/")}
          src={Arrow}
          alt=""
        />
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

export default Id;
