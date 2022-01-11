import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavAdmin() {
  return (
    <div>
      <Navbar className="fondo-nav" expand="lg">
        <div className="container-fluid d-flex justify-content-around">
          <Navbar.Brand className="d-flex flex-wrap" to="/" exact as={NavLink}>
            <Image
              style={{ width: "50px" }}
              src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
              alt=""
            />
          </Navbar.Brand>

          <div className="d-flex justify-content-end">
            <div className="d-flex flex-wrap mt-2">
              <Nav.Link
                as={NavLink}
                to="/NewUser"
                className="text-white"
                href="#action1"
              >
                Crear Usuario
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/NewMood"
                className="text-white"
                href="#action2"
              >
                Mood
              </Nav.Link>
            </div>
            <Nav.Link
              className="mt-2 text-decoration-none text-white"
              as={NavLink}
              to="/Admin"
            >
              Admin
            </Nav.Link>
            <Button
              active
              className="ml-auto  mt-2 color-celeste-claro border-0"
              to="/"
              as={NavLink}
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
