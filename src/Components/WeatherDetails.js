import React from 'react';
import './style.css';

function WeatherDetails({ weatherData }) {
  const { main, wind, clouds } = weatherData;
  return (
    <div className="weather-details">
      <div className="details-item">
        <h4>Temperature</h4>
        <p>{main.temp}°C</p>
      </div>
      <div className="details-item">
        <h4>Humidity</h4>
        <p>{main.humidity}%</p>
      </div>
      <div className="details-item">
        <h4>Wind Speed</h4>
        <p>{wind.speed} m/s</p>
      </div>
      <div className="details-item">
        <h4>Cloudiness</h4>
        <p>{clouds.all}%</p>
      </div>
    </div>
  );
}

export default WeatherDetails;