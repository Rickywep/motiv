import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import Cajas from "./Cajas";
import ModalFeedBack from "./ModalFeedBack";
import ModalMood from "./ModalMood";


export default function CardUsuario() {
  return (
    <div className="container d-flex flex-wrap justify-content-around mt-2 mb-5">
      <div>
        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Img
            className="imgRedonda mt-2"
            variant="top"
            src="https://res.cloudinary.com/dtbfspso5/image/upload/v1643139175/descarga_ovdszg.jpg"
          />
          <div className="d-flex justify-content-end me-5">
            <FontAwesomeIcon icon={faCamera} />
          </div>

          <Card.Body>
            <Card.Title className="text-center">Ricky Moreno</Card.Title>
            <hr />
            <Card.Text className="d-flex flex-wrap justify-content-around">
                  <ModalMood />
                  <ModalFeedBack />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Cajas />
    </div>
  );
}
