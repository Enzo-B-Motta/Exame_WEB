import React, { useState } from 'react';
import styled from 'styled-components';

const APIContainer = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 20px
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  background-color: #4caf50;
  cursor: pointer;
  transition: border-color 0.25s;
  color: white;

  &:hover {
    border-color: #0000;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  font-size: 1em;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 80%;
  max-width: 300px;
`;

function APIFetchPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  // Usando a chave da API a partir das variáveis de ambiente do Vite
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Por favor, insira o nome de uma cidade.");
      return;
    }

    setLoading(true);
    setError(null); // Limpar erros anteriores
    setWeatherData(null); // Limpar dados de clima antigos

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Cidade não encontrada");
      }

      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error("Cidade não encontrada");
      }

      setWeatherData(data);
    } catch (error) {
      setError(error.message || "Não foi possível obter os dados do clima.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <APIContainer>
      <h2>Previsão do Tempo</h2>
      <div>
        <Input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={fetchWeather}>Buscar Clima</Button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibindo mensagens de erro */}

      {loading && <p>Carregando...</p>}

      {weatherData && !loading && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Clima: {weatherData.weather[0].description}</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
          <p>Vento: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </APIContainer>
  );
}

export default APIFetchPage;