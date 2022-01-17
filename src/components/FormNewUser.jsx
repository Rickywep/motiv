import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

export default function FormNewUser() {
  // state de validacion
  const [validated, setValidated] = useState(false);

  // state de usuarios
  const [user, setUser] = useState({
    userName: "",
    userSurname: "",
    email: "",
    password: "",
    rol: "",
  });

  // usuarios en local Storage
  let usuariosIniciales = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuariosIniciales) {
    usuariosIniciales = [];
  }

  // Arreglo de usuario
  const [usuarios, setUsuarios] = useState(usuariosIniciales);

  // use Effect para realizar ciertas operaciones cuando el esta cambia
  useEffect(() => {
    if (usuariosIniciales) {
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
      localStorage.setItem("usuarios", JSON.stringify([]));
    }
  }, [usuarios]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  //Funcion para eliminar una cita por su id
  // const handleDelete = (id) => {
  //   const cerrarSeccion = usuarios.filter((usuario) => usuario.id !== id);
  //   if (usuarios.id !== id) {
  //     setUsuarios(cerrarSeccion);
  //   }
  // };

  // Funcion que se ejecuta cada que el usuario escribe en un  input
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { userName, userSurname, email, password, rol } = user;

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

      //asignar un ID
      user.id = uuidv4();

      // crear una cita
      crearUsuario(user);

      //Reiniciar el form
      setUser({
        userName: "",
        userSurname: "",
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
              name="userName"
              required
              type="text"
              placeholder="Ingresar nombre del usuario"
              onChange={handleChange}
              value={userName}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              name="userSurname"
              required
              type="text"
              placeholder="Ingresar apellido del usuario"
              onChange={handleChange}
              value={userSurname}
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
          <Form.Label>Rol</Form.Label>
          <Form.Select
            
            name="rol"
            onChange={handleChange}
            className="mt-2"
            aria-label="Floating label select example"
            value={rol}
          >
            <option value="">Elegir Rol</option>
            <option value="usuario">usuario</option>
            <option value="admin">admin</option>
          </Form.Select>
          {/* <Form.Group className="mt-2" controlId="formBasicCheckbox">
            <Form.Check
              className="mt-5"
              onChange={handleChange}
              name="checkbox"
              label="¿Es Admin? "
              value={checkbox}
            />
          </Form.Group> */}
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
