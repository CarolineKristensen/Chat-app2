import React, { useState } from "react";
import {
    Form,
    InputGroup,
    Button
} from "react-bootstrap";
import "../css/LoggedOut.css";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // A simple user database
    const users = [
        {username: "feliciabergflo", password: "test123"},
        {username: "carolinekristensen", password: "test123"}
    ];

    function handleLogin(e) {
        e.preventDefault();

        // Check if the entered username and password match 
        // a user in the database
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // user authenticated, sets isLoggedIn state      
            setIsLoggedIn(true);
            props.onLogin(true);
        } else {
            setErrorMessage("Invalid username or password");
        }
    }

    return (
        <div>
            <Form className="pt-4" onSubmit={handleLogin}>
                <Form.Group className="pb-3" controlId="formUsername">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="usernameIcon" src="../images/person-fill.svg" alt="Username icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="pb-3" controlId="formPassword">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="passwordIcon" src="../images/key-fill.svg" alt="Password icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </InputGroup>
                </Form.Group>
                <p id="forgotPwd">
                    <a href="/">Forgot your password?</a>
                </p>
                <div className="text-center">
                    <Button className="loggedOutButton" variant="primary" type="submit" size="lg">
                        Log in
                    </Button>
                </div>
                <br />
                {errorMessage && <div>{errorMessage}</div>}
            </Form>
        </div>
    )
}

export default Login;