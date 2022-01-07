import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const admin = {
  email: "rik@correo.com",
  name: "rick",
  password: "123",
};

export default function Formulario({ setUser }) {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (input.email === admin.email && input.password === admin.password) {
      Swal.fire({
        icon: "success",
        title: "Logueo exitoso",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/Perfil");
      setUser(admin.name);
    } else {
      Swal.fire({
        icon: "error",
        title: "Campos vacios o incorrectos",
      });
    }
    form.reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="card mt-5 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <div className="fondo-titulo">
        <p className="p-2 mt-2 text-white ms-3">MotivWork</p>
      </div>
      <div className="p-4">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
          />
              </Form.Group>
              <Button className="d-flex mx-auto mt-2  text-white p-2  color-boton-modal border-0" size="sm"  type="submit">
              Iniciar sesión
            </Button>
      </div>
    </Form>
  );
}
