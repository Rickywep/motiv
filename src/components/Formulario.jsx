import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Formulario({ login, user }) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);

    if (user.rol === "usuario") {
      Swal.fire({
        icon: "success",
        title: "Bienvenido Usuario",
        showConfirmButton: false,
        timer: 2000,
      });
      window.location.replace("/");
    } else if (user.rol === "admin") {
      Swal.fire({
        icon: "success",
        title: "Bienvenido admin",
        showConfirmButton: false,
        timer: 2000,
      });
      window.location.replace("/Admin");
    } else {
      Swal.fire({
        icon: "error",
        title: "Campos vacios o datos incorrectos",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="card mt-5 mx-auto formulario">
      <div className="fondo-titulo">
        <p className="p-2 mt-2 text-white ms-3">MotivWork</p>
      </div>
      <div className="p-4">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Ingresar su Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
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
