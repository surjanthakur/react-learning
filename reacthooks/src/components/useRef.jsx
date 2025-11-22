import { useEffect, useRef, useState } from 'react';

export default function SearchBox() {
  const inputRef = useRef(null);
  const debounceRef = useRef(null);
  const previousRef = useRef('');

  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    previousRef.current = search;
  }, [search]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    clearTimeout(debounceRef.current);

    debounceRef.current = setInterval(() => {
      setResult(`Searching for: ${value}`);
    }, 300);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>Smart Search</h2>

        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          onChange={handleChange}
          style={{ padding: '10px', width: '250px', fontSize: '16px' }}
        />

        <p style={{ marginTop: '20px' }}>
          <strong>Search Result:</strong> {result}
        </p>

        <p>
          <strong>Previous Search:</strong> {previousRef.current}
        </p>
      </div>
    </>
  );
}
