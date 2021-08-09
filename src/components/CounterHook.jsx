import React, { useState } from 'react';
import useDocumentTitle from './../hook/useDocumentTitle';
function CounterHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  //CDM
  //CDU
  // useEffect() vietoj cdm ir cdu

  // custom user hook
  useDocumentTitle(` ${name} has clicked ${counter} times`);

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
