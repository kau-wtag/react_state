import React, { useState } from "react";

export default function List({ items }) {
  const [selectedId, setSelectedId] = useState(null);
  const [isReverse, setIsReverse] = useState(false);

  const selection = items.find((item) => item.id === selectedId) ?? null;

  return (
    <div>
      <button onClick={() => setIsReverse(!isReverse)}>
        {isReverse ? "Reverse" : "!Reverse"}
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.id === selection?.id}
              onChange={() => setSelectedId(item.id)}
            ></input>
            {item.value}
          </li>
        ))}
      </ul>

      {selection && selection?.id}
    </div>
  );
}
