import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Formulario({ login, user }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { password, email } = input;

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  
    const form = event.currentTarget;
    await login(email, password);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated}  onSubmit={handleSubmit} className="card mt-5 mx-auto formulario">
      <div className="fondo-titulo">
        <p className="p-2 mt-2 text-white ms-3">MotivWork</p>
      </div>
      <div className="p-4">
        <Form.Group className="mb-4"  controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Ingresar su Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Ingresar su Password"
            required
          />
        </Form.Group>
        <Button
          className="d-flex mx-auto mt-2  text-white p-2  color-boton-modal border-0"
          size="sm"
          type="submit"
        >
          Iniciar sesión
        </Button>
      </div>
    </Form>
  );
}
