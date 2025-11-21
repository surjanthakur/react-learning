import { useEffect, useState } from 'react';

export default function UseeffectHook() {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(0);

  useEffect(() => {
    setMultiply(() => count * 2);
  }, [count]);

  return (
    <>
      <div>
        <h1>count is {count}</h1>
        <h2>multiply of count is {multiply}</h2>
        <button onClick={setCount((count) => count + 1)}>count +</button>
      </div>
    </>
  );
}
