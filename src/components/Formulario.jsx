import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import axios from "axios";

const admin = {
  email: "admin@admin",
  name: "admin",
  password: "admin",
};

export default function Formulario() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const { password, email } = input;

  // usuarios en local Storage
  let usuariosIniciales = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuariosIniciales) {
    usuariosIniciales = [];
  }

  // Array de usuario
  const [usuarios, setUsuarios] = useState(usuariosIniciales);

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const login = async () => {
    const response = await axios.post("http://localhost:4000/api/auth", {
      email,
      password,
    });
    return response.data.token;
  };

  const typeUser = async (token) => {
    const response = await axios.get("http://localhost:4000/api/auth", {
      headers: { "x-auth-token": token },
    });

    return response.data.usuario.rol;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await login();
    localStorage.setItem("token", token);

    const type = await typeUser(token);

    if (type === "usuario") {
      Swal.fire({
        icon: "success",
        title: "Bienvenido Usuario",
        showConfirmButton: false,
        timer: 2000,
      });

      history.push("/");
    } else if (type === "admin") {
      Swal.fire({
        icon: "success",
        title: "Bienvenido admin",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/Admin");
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
