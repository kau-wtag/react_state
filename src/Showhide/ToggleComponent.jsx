import React, { useState } from "react";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Details
      </button>
      {isVisible && <p>This is the details section.</p>}
    </div>
  );
}

export default ToggleComponent;
