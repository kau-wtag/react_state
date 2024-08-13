import React, { useState } from "react";

function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h1>Welcome to the site!</h1>
      {isLoggedIn && <p>You are logged in.</p>}
    </div>
  );
}

export default WelcomeMessage;
