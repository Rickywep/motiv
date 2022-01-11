import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Image } from "react-bootstrap";

export default function Caja({data}) {
    const {usuarioA , usuarioB, fotoA, fotoB, mood, descripcion, fecha} = data
  return (
    <>
      <Card
        className="container border-0 color-celeste mt-2"
      >
        <Card.Body>
          <Card.Title className="text-center text-white p-2 d-flex  justify-content-around color-celeste-claro">
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src={fotoA}
                alt="iconos-perfil"
              />
                          <div>{ usuarioA}</div>
            </div>
            <div className="mt-4 fs-6">comento a
              <span className="ms-2"><FontAwesomeIcon icon={faArrowRight} /> </span>
            </div>
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src={fotoB}
                alt="iconos-perfil"
              />
                          <div>{ usuarioB}</div>
            </div>
          </Card.Title>
          <div className="color-fondo">
            <Card.Text className="text-center fs-4 color-texto-celeste">
              {mood}
            </Card.Text>
            <Card.Text className="text-center fs-6">
              {descripcion}
            </Card.Text>
            <Card.Text className="p-3 text-muted d-flex justify-content-end">
              {fecha}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
