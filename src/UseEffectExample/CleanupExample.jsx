import React, { useState, useEffect } from "react";

function CleanupExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Setting up interval");

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("Cleaning up interval");
      clearInterval(interval); // Cleanup the interval
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default CleanupExample;
