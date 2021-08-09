import React, { useState, useEffect } from 'react';
function CounterHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  //CDM
  //CDU
  // useEffect() vietoj cdm ir cdu
  useEffect(() => {
    console.log('useEffect');
    document.title = ` ${name} has clicked ${counter} times`;
  });

  return (
    <div>
      <h2>Counter of {name}</h2>
      <h2>
        {name} has clicked {counter} times
      </h2>
      <h2>This is how many times pressed {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={() => setName('James')}>Set name to James</button>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default CounterHook;
