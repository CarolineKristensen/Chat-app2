import React, { useState } from "react";
import {
    Form,
    InputGroup,
    Button
} from "react-bootstrap";
import "../css/LoggedOut.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        alert(username + " " + password);
    }

    return (
        <div>
            <Form className="pt-4" onSubmit={handleSubmit}>
                <Form.Group className="pb-3" controlId="formUsername">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="usernameIcon" src="../images/person-fill.svg" alt="Username icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="pb-3" controlId="formPassword">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="passwordIcon" src="../images/key-fill.svg" alt="Password icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
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
            </Form>
        </div>
    )
}

export default Login;