import React, { useState } from "react";
import {
    Container,
    Tab,
    Tabs
} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

function LoggedOut(props) {
    const [key, setKey] = useState("login");
    
    // A simple user database
    const [users, setUsers] = useState([
        {username: "feliciabergflo", password: "test123"},
        {username: "carolinekristensen", password: "test123"}
    ]);

    // Recieves a username and password as arguments
    function handleRegister(username, password) {
        setUsers([...users, {username, password}]); // updates the users state by adding new object
    }

    return (
        <Container className="loggedOutDiv pb-4 px-3">
            {key === "login" ? (
                <h1 className="text-center py-4">Log in</h1>
            ): (
                <h1 className="text-center py-4">Register</h1>
            )}
            <Tabs defaultActiveKey="login" id="loginRegister" activeKey={key} onSelect={(k) => setKey(k)} justify>
                <Tab className="loginDiv" eventKey="login" title="Log in">
                    <Login onLogin={props.onLogin} users={users} />
                </Tab>
                <Tab className="registerDiv" eventKey="register" title="Register">
                    <Register onRegister={handleRegister} />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOut;