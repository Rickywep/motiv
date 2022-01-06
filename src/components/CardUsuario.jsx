import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Nav } from "react-bootstrap";
import Caja1 from "./Caja1";
import Caja2 from "./Caja2";
import Caja3 from "./Caja3";

export default function CardUsuario() {
  return (
    <div className="container d-flex flex-wrap justify-content-around mt-2">
      <div>
        <Card className="mt-3" style={{ width: "18rem" }}>
          <Card.Img
            className="imgRedonda mt-2"
            variant="top"
            src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641442869/12575cb97a22f0f_qrs5bs.jpg"
          />
          <div className="d-flex justify-content-end me-5">
            <FontAwesomeIcon icon={faCamera} />
          </div>

          <Card.Body>
            <Card.Title className="text-center">Usuario</Card.Title>
            <hr />
            <Card.Text className="d-flex flex-wrap justify-content-around">
                  <Nav.Link href="/home">New Mood</Nav.Link>
                  <Nav.Link eventKey="link-1">Feedback</Nav.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Caja1 />
        <Caja2 />
        <Caja3 />
      </div>
    </div>
  );
}
