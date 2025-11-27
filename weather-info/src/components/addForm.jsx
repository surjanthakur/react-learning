import { useState } from 'react';

export default function WeatherForm() {
  const [city, setCity] = useState('');

  return (
    <form
      className="mx-auto max-w-sm bg-purple-800 p-4 rounded-xl shadow-md flex "
      onSubmit={handleSubmit}
    >
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
