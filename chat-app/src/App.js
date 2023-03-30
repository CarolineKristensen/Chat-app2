import React, { useState } from "react";
import { 
  BrowserRouter,
  Routes,
  Route 
  } from "react-router-dom";
import Home from "./components/home/Home";
import LoggedOut from "./components/loggedOut/LoggedOut";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/Common.css";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/loggedout" element={<LoggedOut />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
