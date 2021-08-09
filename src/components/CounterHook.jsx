import React, { useState } from 'react';
function CounterHook() {
  const arr = useState(0);
  console.log(arr);
  const counter = arr[0];
  return (
    <div>
      <h2>This is how many times pressed {counter}</h2>
      <button>Click me</button>
    </div>
  );
}

export default CounterHook;
