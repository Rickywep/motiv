import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function FormNewUser() {
  // state de validacion
  const [validated, setValidated] = useState(false);

  // state de usuarios
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const crearUsuario = async () => {
    await axios.post("http://localhost:4000/api/usuarios", {
      nombre,
      email,
      password,
    });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { nombre, email, password } = user;

  // cuando el usuario presiona  el enviar cita
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    //validar
    if (form.checkValidity() === true) {
      event.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "Usuario creado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });

      crearUsuario();
      //Reiniciar el form
      setUser({
        nombre: "",
        email: "",
        password: "",
        rol: "",
      });
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "campos vacios o datos incorrectos",
      });
    }
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="card mt-5 mx-auto formulario"
    >
      <div className="fondo-titulo">
        <p className="p-2 mt-2 text-white ms-3">MotivWork - Crear Usuario</p>
      </div>
      <div>
        <div className="card-body">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              required
              type="text"
              placeholder="Ingresar nombre del usuario"
              onChange={handleChange}
              value={nombre}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              required
              type="text"
              placeholder="Ingresar email"
              onChange={handleChange}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              required
              type="text"
              placeholder="Ingresar Nombre del dueño"
              onChange={handleChange}
              value={password}
            />
          </Form.Group>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-2">
        <Button
          className=" text-white p-2 color-boton-modal border-0"
          size="sm"
          type="submit"
          value="Send"
        >
          <b>Crear</b>
        </Button>
      </div>
    </Form>
  );
}
