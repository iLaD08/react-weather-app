import React from "react";
import Logo from "../assets/logo.png";

const WeatherData = ({ loading, weather }) => {
  const { name, temp } = weather;

  return (
    <div className="data">
      {loading ? (
        "loading..."
      ) : (
        <div className="data-top">
          <img src={Logo} alt="YUY" title="YUY" />
          <div className="location">{name}</div>
          <div className="temp">{Math.round(temp)}°c</div>
        </div>
      )}
    </div>
  );
};

export default WeatherData;
