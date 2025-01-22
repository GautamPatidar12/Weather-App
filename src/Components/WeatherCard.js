import React from 'react';
import './style.css';

function WeatherCard({ weatherData }) {
  const { name, main, weather, wind } = weatherData;
  return (
    <div className="weather-card">
      <h2 className="city-name">{name}</h2>
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </div>
      <div className="temperature">
        <p>{main.temp}°C</p>
        <p>{weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;