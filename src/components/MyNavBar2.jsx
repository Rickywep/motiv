import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import ModalLogin from "./ModalLogin";

export default function MyNavBar2() {
  return (
    <div>
      <Navbar className="fondo-nav" expand={false}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              style={{ width: "50px" }}
              src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="color-celeste-claro border-0 mx-2"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            className="color-celeste-claro"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Image
                  style={{ width: "100px" }}
                  src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
                  alt=""
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="color-celeste">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav className="me-5">
                  <ModalLogin />
                  <span className="text-white mt-2 mx-3 text-center mb-2">Ricky Moreno</span>
                  <Button className="color-celeste-claro border-0 mx-2" size="sm">
                    {" "}
                    cerrar sesión
                  </Button>
                </Nav>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
