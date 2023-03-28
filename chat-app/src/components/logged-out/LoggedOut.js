import React, { useState } from "react";
import {
    Container,
    Tab,
    Tabs
} from "react-bootstrap";
import Login from ".Login";
import Register from "./Register";
import "../css/LoggedOut.css";

function LogOut() {
    const [key, setKey] = useState("login");

    retun (
        <Container className="loggedOutDiv shadow pb-4 px-3">
            {key === "login" ? (
                <h1 className="text-center py-4">Log in</h1>
            ) : (
                <h1 className="text-center py-4">Register</h1>
            )}
            <Tabs defaultActiveKey="login" id="loginRegister" activeKey={key} onSelect={(k) => setKey(k)} justify>
                <Tab className="loginDiv" eventKey="login" title="Log In">
                    <Login />
                </Tab>
                <Tab className="registerDiv" eventKey="register" title="Register">
                    <Register />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOut;