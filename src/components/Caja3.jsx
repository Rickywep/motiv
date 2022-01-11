import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Image } from "react-bootstrap";

export default function Caja3() {
  return (
    <>
      <Card
        className=" container  border-0 color-celeste"
      >
        <Card.Body>
          <Card.Title className="bg-primary text-center text-white p-3 d-flex  justify-content-around color-celeste-claro">
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641454166/1618942523622_rz1gof.jpg"
                alt="iconos-perfil"
              />
              <div>Ricky Moreno</div>
            </div>
            <div className="mt-4 fs-6">comento a <br />
              <FontAwesomeIcon icon={faArrowRight} /></div>
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png"
                alt="iconos-perfil"
              />
              <div>Florencia</div>
            </div>
          </Card.Title>
          <div className="color-fondo">
            <Card.Text className="text-center fs-4 color-texto-celeste">
              BUEN TRABAJO
            </Card.Text>
            <Card.Text className="text-center fs-6">
              Hizo un excelente trabajo en el proyecto!
            </Card.Text>
            <Card.Text className="p-3 text-muted d-flex justify-content-end">
              12 de abril
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
