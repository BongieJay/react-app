import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

export default function Main() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let days = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];

    let day = days[date.getDay()];
    if (minutes < 10) minutes = `0${minutes}`;

    return `${day} ${hours}:${minutes}`;
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return days[date.getDay()];
  }

  function searchCity(city) {
    let apiKey = "3e3327a51fbe30a3ff308740cot7f2a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setWeather(response.data);
    });
  }

  function getForecast(city) {
    let apiKey = "3e3327a51fbe30a3ff308740cot7f2a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
    });
  }

  useEffect(() => {
    searchCity("Paris");
    getForecast("Paris");
  }, []);

  return (
    <main>
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="city">
            {weather ? weather.city : ""}
          </h1>

          <p className="weather-app-details">
            <span id="time">
              {weather ? formatDate(weather.time) : ""}
            </span>,
            <span id="description">
              {weather ? weather.condition.description : ""}
            </span>
            <br />
            Humidity:{" "}
            <strong id="humidity">
              {weather ? `${weather.temperature.humidity}%` : ""}
            </strong>
            , Wind:
            <strong id="wind-speed">
              {weather ? `${weather.wind.speed} km/h` : ""}
            </strong>
          </p>
        </div>

        <div className="weather-app-temperature-container">
          <div>
            <img
              src={
                weather
                  ? weather.condition.icon_url
                  : "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              }
              className="weather-app-icon"
              id="icon"
              alt=""
            />
          </div>

          <div className="weather-app-temperature" id="temperature">
            {weather ? Math.round(weather.temperature.current) : ""}
          </div>

          <div className="weather-app-unit">°C</div>
        </div>
      </div>

      <div className="weather-app-forecast" id="forecast">
        {forecast.slice(0, 5).map((day, index) => (
          <div key={index} className="weather-forecast-day">
            <div className="weather-forecast-date">
              {formatDay(day.time)}
            </div>

            <img
              src={day.condition.icon_url}
              className="weather-forecast-icon"
              alt=""
            />

            <div className="weather-forecast-temperatures">
              <div className="weather-forecast-temperature">
                <strong>{Math.round(day.temperature.maximum)}°</strong>
              </div>

              <div className="weather-forecast-temperature">
                {Math.round(day.temperature.minimum)}°
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}