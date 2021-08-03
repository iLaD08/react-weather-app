import axios from "axios";

const getWeather = ({ query, setWeather, setLoading }) => {
  setLoading(true);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=7e300e292860d3fac52521f10b6e4773`
    )
    .then((res) => {
      setWeather({
        name: `${res.data.name} ${res.data.sys.country}`,
        temp: res.data.main.temp,
      });
      setLoading(false);
    })
    .catch(() => {
      console.log("i failed daddy");
      setLoading(false);
      setWeather({
        name: "Not found!",
        temp: 404,
      });
    });
};

export default getWeather;
