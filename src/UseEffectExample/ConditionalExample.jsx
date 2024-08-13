import React, { useState, useEffect } from "react";

function ConditionalExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Only when count changes");
    document.title = `You clicked ${count} times`;
  }, [count]); // Only run this effect when count changes

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ConditionalExample;
