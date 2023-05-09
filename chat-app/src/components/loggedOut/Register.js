import React, { useState } from "react";
import {
    Form,
    InputGroup,
    Button
} from "react-bootstrap";

function Register(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(username, password); // Passes the new user data to the handleRegister function in LoggedOut.js
        setSuccessMessage("Temporary user created!");
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
                <Form.Check type="checkbox" id="registerConsent" label="I consent..." required />
                <div className="text-center">
                    <Button className="loggedOutButton" variant="secondary" type="submit" size="lg">
                        Register
                    </Button>
                </div>
                <br />
                {successMessage && <div className="message success">{successMessage}</div>}
            </Form>
        </div>
    )
}

export default Register;