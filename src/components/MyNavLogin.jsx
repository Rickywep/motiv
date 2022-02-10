import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavLogin({ user }) {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <Navbar className="fondo-nav" expand="lg">
        <div className="container-fluid d-flex justify-content-around">
          <Navbar.Brand to="/" exact as={NavLink}>
            <Image
              style={{ width: "50px" }}
              src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
              alt=""
            />
          </Navbar.Brand>
          <div className="d-flex justify-content-end">
            <Nav.Link
              className="mt-2 text-decoration-none text-white"
              as={NavLink}
              to="/perfil"
            >
              {user.nombre}
            </Nav.Link>
            <Button
              active
              className="ml-auto  mt-2 color-celeste-claro border-0"
              to="/Login"
              onClick={cerrarSesion}
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
