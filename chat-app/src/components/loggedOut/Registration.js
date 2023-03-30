import React, { 
    useState, 
    useRef, 
    useEffect,
    useContext 
} from "react";
import {
    Container,
    Form,
    InputGroup,
    Button
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";
import UserContext from "../../UserContext";

function Register() {
    // States for registration
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // States for checking errors
    const [errMessage, setErrMessage] = useState("");
    const [success, setSuccess] = useState(false);

    // 
    const userRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMessage("");
        //setShowConsentForm(false);
    }, [username, email, password, confirmPassword]);

    // Handling form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrMessage("Passwords don't match.");
            errRef.current.focus();
            return;
        }
        try {
            const response = await registerUser(username, email, password);
            if (response.status === 200) {
                setUser(email);
                setSuccess(true);
            }
        } catch (err) {
            if (!err?.response) {
                setErrMessage("No response from server.");
            } else if (err?.response.status === 409) {
                setErrMessage("Email already registered.");
            } else if (err?.response.status === 403) {
                setErrMessage("Password requirements not met.");
            } else {
                setErrMessage("Something went wrong, please try again.");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                navigate("/home")
            ) : (
                <Container className="loggedOutDiv pb-4 px-3">
                    <div>
                        <h2>Registration</h2>
                    </div>
                    <Form className="pt-4">
                        <Form.Group className="pb-3" controlId="formUsername">
                            <InputGroup>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Username" 
                                    autoComplete="off"
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="pb-3" controlId="formEmail">
                            <InputGroup>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Email" 
                                    autoComplete="off"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="pb-3" controlId="formPassword">
                            <InputGroup>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="pb-3" controlId="confirmPassword">
                            <InputGroup>
                                <Form.Control 
                                    type="password"
                                    placeholder="Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <div className="text-center">
                            <Button className="loggedOutButton" type="submit" onClick={handleSubmit}>
                                Register
                            </Button>
                        </div>
                        <p ref={errRef} aria-live="assertive" className={errMessage ? "errmsg errmsg text-danger text-center mt-2" : "offscreen"}>
                            {errMessage}
                        </p>
                    </Form>
                </Container>
            )}
        </>
    )
}

export default Register;