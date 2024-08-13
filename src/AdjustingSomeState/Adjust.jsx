import React, { useState } from "react";
import List from "./List";

export default function Adjust() {
  const list1 = [
    { id: 1, value: 45 },
    { id: 2, value: 85 },
    { id: 3, value: 124 },
  ];
  const list2 = [
    { id: 4, value: 48 },
    { id: 5, value: 3456346 },
    { id: 6, value: 3452 },
  ];
  const [list, setList] = useState(null);

  return (
    <div>
      <button onClick={() => setList(list1)}>List 1</button>
      <button onClick={() => setList(list2)}>List 2</button>
      <List items={list?? []} />
    </div>
  );
}
