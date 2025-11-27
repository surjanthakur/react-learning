import { useWeather } from '../context/weatherContext';

export default function WeatherData() {
  const { city, weatherData } = useWeather();

  return (
    <div className="max-w-sm mx-auto bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-5 flex items-center gap-4">
      <div className="shrink-0">
        <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-linear-to-br from-sky-100 to-indigo-100 text-2xl font-semibold">
          👽
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl font-extrabold leading-tight">{city}</h2>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Temperature :{' '}
          {weatherData ? `${Math.round(weatherData.main.temp)}°C` : 'No data'}
        </p>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Country : {weatherData ? `${weatherData.sys.country}` : 'No data'}
        </p>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Humidity :{' '}
          {weatherData ? `${weatherData.main.humidity}°C` : 'No data'}
        </p>
      </div>
    </div>
  );
}
