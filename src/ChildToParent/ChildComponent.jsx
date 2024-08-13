import React, { useState } from "react";

function ChildComponent({ onMessageChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onMessageChange(inputValue); // Pass data to parent
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a message"
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
}

export default ChildComponent;
