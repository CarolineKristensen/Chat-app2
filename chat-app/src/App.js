import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";


function App() {
  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <LoginButton/>
      <LogoutButton/>
    </main>
  );
}

export default App;
