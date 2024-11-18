import React, { useState } from "react";
import "./styles.css";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = "d716f30b282c6cd24d67f99301f731ae";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      if (!response.ok) {
        throw new Error("Cidade não encontrada");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherData();
    }
  };

  const getTemperatureEmoji = (temp) => {
    if (temp >= 30) return "🔥";
    if (temp >= 20) return "☀️";
    if (temp >= 10) return "🌤️";
    if (temp >= 0) return "🧣";
    return "❄️";
  };

  const getWeatherEmoji = (description) => {
    if (description.includes("chuva")) return "🌧️";
    if (description.includes("nublado")) return "☁️";
    if (description.includes("sol")) return "☀️";
    if (description.includes("neve")) return "⛄";
    if (description.includes("tempestade")) return "⛈️";
    return "🌤️";
  };

  const getHumidityEmoji = () => "💧";
  const getWindEmoji = () => "🌬️";

  return (
    <div className="weather-container">
      <h2>Busca de Previsão do Tempo</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          <p>
            Temperatura: {weatherData.main.temp}°C{" "}
            {getTemperatureEmoji(weatherData.main.temp)}
          </p>
          <p>
            Condição: {weatherData.weather[0].description}{" "}
            {getWeatherEmoji(weatherData.weather[0].description)}
          </p>
          <p>
            Umidade: {weatherData.main.humidity}% {getHumidityEmoji()}
          </p>
          <p>
            Vento: {weatherData.wind.speed} m/s {getWindEmoji()}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
