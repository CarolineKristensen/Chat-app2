import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route 
  } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/loggedOut/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/Common.css";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
