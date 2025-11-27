import { useState } from 'react';
import './App.css';
import WeatherForm from './components/addForm';
import WeatherData from './components/displayWeather';
import { WeatherContextProvider } from './context/weatherContext';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <WeatherContextProvider
        value={{ city, setCity, weatherData, setWeatherData }}
      >
        <WeatherForm />
        <WeatherData />
      </WeatherContextProvider>
    </>
  );
}

export default App;
