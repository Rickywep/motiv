import React from "react";
import { Button, Image, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function MyNavBar() {
  return (
    <div>
      <Navbar className="fondo-nav" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand to="/" exact as={NavLink}>
            <Image
              style={{ width: "50px" }}
              src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641438758/image_smpczk.png"
              alt=""
            />
          </Navbar.Brand>
          <Button
            active
            className="ml-auto color-celeste-claro border-0"
            to="login"
            as={NavLink}
          >
            Login
          </Button>
        </div>
      </Navbar>
    </div>
  );
}
