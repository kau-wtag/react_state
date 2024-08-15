import React, { useRef, useState } from "react";

const count = {
  current: 0,
};

export default function Counter() {
  let normalVar = 0;
  let ref = useRef(0);
  const [stateVar, setStateVar] = useState(0);

  const handleState = () => {
    console.log("ref: ", ref.current);
    console.log("normal: ", normalVar);
    console.log("stateVar: ", stateVar);

    ref.current = ref.current + 1;
    normalVar = normalVar + 1;
    setStateVar((p) => p + 1);
  };

  const handleRef = () => {
    console.log("ref: ", ref.current);
    console.log("normal: ", normalVar);
    console.log("stateVar: ", stateVar);

    ref.current = ref.current + 1;
  };

  const handleCount = () => {
    count.current = count.current + 1;
    console.log(count.current);
  };

  return (
    <div>
      <p>{ref.current}</p>
      <button onClick={handleRef}>Ref Counter</button>
      <button onClick={handleState}>State Counter</button>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}
