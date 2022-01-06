import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  Card, Nav } from "react-bootstrap";

export default function CardUsuario() {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="imgRedonda mt-2"
          variant="top"
          src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641442869/12575cb97a22f0f_qrs5bs.jpg"
          fluid
        />
        <div className="d-flex justify-content-end me-5">
          <FontAwesomeIcon icon={faCamera} />
        </div>

        <Card.Body>
          <Card.Title className="text-center">Usuario</Card.Title>
          <hr />
          <Card.Text>
            <div className="d-flex flex-wrap justify-content-around">
              <Nav.Item>
                <Nav.Link href="/home">New Mood</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Feedback</Nav.Link>
              </Nav.Item>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
