import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage("Todos los campos son obligatorios");
      setMessageType("danger");
      return;
    }

    if (password.length < 6) {
      setMessage("El password debe tener al menos 6 caracteres");
      setMessageType("danger");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("El password y la confirmación deben ser iguales");
      setMessageType("danger");
      return;
    }

    setMessage("Registro exitoso");
    setMessageType("success");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="form-page py-5">
      <div className="form-box">
        <h1 className="mb-4">Register</h1>

        {message && <Alert variant={messageType}>{message}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;