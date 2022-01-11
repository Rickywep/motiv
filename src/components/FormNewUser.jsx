import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormNewUser() {
  const [input, setInput] = useState({});
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      Swal.fire({
        icon: "success",
        title: "Usuario creado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
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
      ref={form}
      noValidate
      validated={validated}
      onSubmit={sendEmail}
      className="card mt-5 mx-auto formulario"
    >
      <div>
        <div className="card-body">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="Nombre"
              onChange={handleChange}
              type="text"
              placeholder="Ingresar Nombre"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Ingresar Apellido"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Ingresar Email"
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
          <Form.Group className="mt-2" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleChange}
              type="checkbox"
              name="checkbox"
              required
              label="¿Es Admin? "
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
