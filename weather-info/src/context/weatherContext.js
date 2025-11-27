import { createContext, useContext } from 'react';

const WeatherContext = createContext({
  City: () => {},
  weatherData: () => {},
});

export const WeatherContextProvider = WeatherContext.Provider;

export const useWeather = () => {
  return useContext(WeatherContext);
};
