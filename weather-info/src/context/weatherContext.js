import { createContext, useContext } from 'react';

const WeatherContext = createContext({
  city: '',
  weatherData: null,
  setCity: (city) => {},
  setWeatherData: (data) => {},
});

export const WeatherContextProvider = WeatherContext.Provider;

export const useWeather = () => {
  return useContext(WeatherContext);
};
