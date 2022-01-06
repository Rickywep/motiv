import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import ModalLogin from "./ModalLogin";

export default function MyNavBar() {
  return (
    <div>
      <Navbar className="fondo-nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              style={{ width: "50px" }}
              src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
              alt=""
            />
          </Navbar.Brand>
          <Nav className="me-5">
            <ModalLogin />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
