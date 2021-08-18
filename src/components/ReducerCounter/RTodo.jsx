import React from 'react';
import { ACTION } from './ReducerSimpleTodo';

function RTodo({ item, dispatch }) {
  return (
    <li>
      <span>{item.title}</span>
      <button
        onClick={() =>
          dispatch({ type: ACTION.TOGGLE_TODO, payload: item.title })
        }
      >
        Toggle
      </button>
      <button>Delete</button>
    </li>
  );
}

export default RTodo;
