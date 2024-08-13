import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [message, setMessage] = useState("");

  const handleMessage = (childData) => {
    setMessage(childData);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <ChildComponent onMessageChange={handleMessage} />
    </div>
  );
}

export default ParentComponent;
