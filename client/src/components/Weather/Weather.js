import React, { useEffect, useState } from "react";
import WeatherContext from "../../utils/WeatherContext";
import API from "../../utils/API";

function Weather() {
  const [weather, setWeather] = useState(WeatherContext);
  console.log(weather);
  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = () => {
    API.getWeather()
      .then((info) => {
        console.log(info);
        setWeather(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="container flow-root w-1/6 bg-gray-800 p-1 text-2xl rounded-md">
      <div className="float-center pl-1 pr-1 pt-1 pb-1 bg-white border border-black rounded-md text-center bg-opacity-60">
        <div className="inline-block mb-5">
          <h1>
            {weather.data.list[0].main.temp} {"\xB0F"}
          </h1>
        </div>
        <div className="inline-block">
          <img
            src={`http://openweathermap.org/img/w/${weather.data.list[0].weather[0].icon}.png`}
            alt="weather status icon"
            className="weather-icon"
          />
        </div>
      </div>
    </section>
  );
}

export default Weather;
