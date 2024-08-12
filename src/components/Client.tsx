"use client";

import { createElement, useState } from "react";

export function Client({ component }) {
  const [count, setCount] = useState(1);

  return (
    <>
      <p>The count is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
      {component ? (
        <div>
          <p>Component</p>
          {createElement(component)}
        </div>
      ) : null}
    </>
  );
}
