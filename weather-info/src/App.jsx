import './App.css';
import WeatherForm from './components/addForm';
import WeatherData from './components/displayWeather';
import { WeatherContextProvider } from './context/weatherContext';

function App() {
  return (
    <>
      <WeatherContextProvider value={{ City, weatherData }}>
        <WeatherForm />
        <WeatherData />
      </WeatherContextProvider>
    </>
  );
}

export default App;
