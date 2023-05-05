import React, { useState } from "react";
import Home from "./components/home/Home";
import LoggedOut from "./components/loggedOut/LoggedOut";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/Common.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(isLoggedIn) {
    setIsLoggedIn(isLoggedIn);
    alert(isLoggedIn);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home />
      ) : (
        <LoggedOut onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
