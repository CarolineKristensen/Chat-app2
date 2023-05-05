import React, { useState } from "react";
//import "../css/LoggedOut.css";
import {
    Container,
    Tab,
    Tabs
} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

function LoggedOut(props) {
    const [key, setKey] = useState("login");
    
    return (
        <Container className="loggedOutDiv pb-4 px-3">
            {key === "login" ? (
                <h1 className="text-center py-4">Log in</h1>
            ): (
                <h1 className="text-center py-4">Register</h1>
            )}
            <Tabs defaultActiveKey="login" id="loginRegister" activeKey={key} onSelect={(k) => setKey(k)} justify>
                <Tab className="loginDiv" eventKey="login" title="Log in">
                    <Login onLogin={props.onLogin} />
                </Tab>
                <Tab className="registerDiv" eventKey="register" title="Register">
                    <Register />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOut;