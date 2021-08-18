import React from 'react';
import { ACTION } from './ReducerSimpleTodo';

function RTodo({ item, dispatch }) {
  return (
    <li>
      <span style={{ color: item.done ? 'lightblue' : 'black' }}>
        {item.title}
      </span>
      <button
        onClick={() => dispatch({ type: ACTION.TOGGLE_TODO, payload: item.id })}
      >
        Toggle
      </button>
      <button
        onClick={() => dispatch({ type: ACTION.DELETE_TODO, payload: item.id })}
      >
        Delete
      </button>
    </li>
  );
}

export default RTodo;
