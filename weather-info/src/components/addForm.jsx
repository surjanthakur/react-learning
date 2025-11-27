import axios from 'axios';
import { useState } from 'react';
import { useWeather } from '../context/weatherContext';

export default function WeatherForm() {
  const [cityName, setCityName] = useState('');
  const { setCity, setWeatherData } = useWeather();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=04686a7ac53877a0115b545489c9fac1`
      );
      const data = response.data;
      setWeatherData(data);
      console.log(data);
      setCity(cityName);
      setCityName('');
    } catch (error) {
      console.error(' 💁🏻 Error while fetching weather data:', error);
    }
  };

  return (
    <form
      className="mx-auto max-w-sm bg-purple-800 p-4 rounded-xl shadow-md flex "
      onSubmit={handleSubmit}
    >
      <input
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        type="text"
        placeholder="Enter city"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
      >
        Add
      </button>
    </form>
  );
}
