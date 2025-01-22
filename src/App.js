import React, { useState, useEffect } from 'react';
import WeatherSearch from './Components/WeatherSearch.js'
import WeatherCard from './Components/WeatherCard.js'
import WeatherDetails from './Components/WeatherDetails.js'
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('New York');
  const [loading, setLoading] = useState(false);

  // Fetch weather data when location changes
  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=76101c7564ab45946ab311ef6a6cc595&units=metric`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      setLoading(false);
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div className="app">
      <h1 className="app-title">Weather Dashboard</h1>
      <WeatherSearch setLocation={setLocation} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : weatherData ? (
        <div className="weather-info">
          <WeatherCard weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </div>
      ) : (
        <div className="error-message">Failed to fetch weather data. Please try again.</div>
      )}
    </div>
  );
}

export default App;