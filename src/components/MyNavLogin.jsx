import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavLogin() {
  return (
    <div>
      <Navbar className="fondo-nav" expand="lg">
        <Container>
          <Navbar.Brand to="/" exact as={NavLink}>
            <Image
              style={{ width: "50px" }}
              src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
              alt=""
            />
          </Navbar.Brand>
          <div className="d-flex justify-content-end">
            <Nav.Link className="mt-2 text-decoration-none text-white" as={NavLink} to="/perfil">
              Ricky Moreno
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              <Button
                active
                className="ml-auto mt-1 color-celeste-claro border-0"
                to="/"
                as={NavLink}
              >
                Cerrar sesión
              </Button>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}