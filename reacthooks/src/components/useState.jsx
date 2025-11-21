import { useState } from 'react';
export default function UsestateHook() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>count is {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>count +</button>
      </div>
    </>
  );
}
