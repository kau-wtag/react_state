import React, { useState, useEffect } from "react";

function DependencyExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Updating title for ${name}`);
    document.title = `${name} clicked ${count} times`;
  }, [count, name]); // Effect runs when count or name changes

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

export default DependencyExample;
