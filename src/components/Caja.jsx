import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Image } from "react-bootstrap";

export default function Caja({ data }) {
  const { creador, colega, contenido, categoria, registro } = data;

  return (
    <>
      <Card className="container border-0 color-celeste mt-2">
        <Card.Body>
          <Card.Title className="text-center text-white p-2 d-flex  justify-content-around color-celeste-claro">
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src={
                  creador.img
                    ? creador.img
                    : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                }
                alt="iconos-perfil"
              />
              <div>{creador.nombre}</div>
            </div>
            <div className="mt-4 fs-6">
              comento a
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />{" "}
              </span>
            </div>
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src={
                  colega.img
                    ? colega.img
                    : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                }
                alt="iconos-perfil"
              />
              <div>{colega.nombre}</div>
            </div>
          </Card.Title>
          <div className="color-fondo">
            <Card.Text className="text-center fs-4 color-texto-celeste">
              {categoria}
            </Card.Text>
            <Card.Text className="text-center fs-6">{contenido}</Card.Text>
            <Card.Text className="p-3 text-muted d-flex justify-content-end">
              {registro}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
