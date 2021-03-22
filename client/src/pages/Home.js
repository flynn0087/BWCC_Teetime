/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Course from "../components/Course/Course";
import Header from "../components/Header/Header";
import LoginContext from "../utils/LoginContext";
import WeatherContext from "../utils/WeatherContext";
import API from "../utils/API";

function Home() {
  const { isLoggedIn } = useContext(LoginContext);
  const { weather, setWeather } = useContext(WeatherContext);
  console.log(weather);

  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = () => {
    API.getWeather()
      .then((info) => {
        setWeather({
          ...weather,
          temp: info.data.list[0].main.temp,
          windspeed: info.data.list[0].wind.speed,
          icon: info.data.list[0].weather[0].icon,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-golf bg-no-repeat bg-fixed bg-cover">
      <Header></Header>
      <section className="container flow-root w-1/6 bg-gray-800 p-1 rounded-md">
        <div className="float-center pl-1 pr-1 pt-1 pb-1 bg-white border border-black rounded-md text-center bg-opacity-60">
          <div className="inline-block mb-5 text-2xl">
            <h1>
              {weather.temp}
              {"\xB0F"}
            </h1>
          </div>
          <div className="inline-block">
            <img
              src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          </div>
          <hr></hr>
          <div>Wind: {weather.windspeed} mph</div>
        </div>
      </section>
      <Course></Course>
    </div>
  );
}

export default Home;
