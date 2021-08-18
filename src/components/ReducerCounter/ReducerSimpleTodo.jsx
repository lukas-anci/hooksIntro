import React, { useReducer } from 'react';

const ACTION = {};

function countReducer(state, action) {}

export default function ReducerSimpleTodo() {
  return (
    <div>
      <h4>Reducer Simple Todo</h4>
      <input type="text" placeholder="Enter todo" />
    </div>
  );
}
