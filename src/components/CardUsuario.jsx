import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import Cajas from "./Cajas";
import ModalFeedBack from "./ModalFeedBack";
import ModalMood from "./ModalMood";

export default function CardUsuario({ user, token }) {
  return (
    <div className="container d-flex flex-wrap justify-content-around mt-2 mb-5">
      <div>
        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Img
            className="imgRedonda mt-2"
            variant="top"
            src={
              user.image
                ? user.image
                : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
          />
          <div className="d-flex justify-content-end me-5">
            <FontAwesomeIcon icon={faCamera} />
          </div>

          <Card.Body>
            <Card.Title className="text-center">{user.nombre}</Card.Title>
            <hr />
            <Card.Text className="d-flex flex-wrap justify-content-around">
              <ModalMood token={token} />
              <ModalFeedBack token={token}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Cajas />
    </div>
  );
}
