import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route 
  } from "react-router-dom";
import Home from "../home/Home";
import Login from "../loggedOut/Login";
import Registration from "../loggedOut/Registration";
import useToken from "./useToken";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Common.css";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
