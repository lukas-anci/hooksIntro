import React, { useState } from 'react';

export default function ReducerCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>ReducerCounter</h4>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
