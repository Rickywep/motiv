import React from "react";
import { Card, Image } from "react-bootstrap";

export default function Caja1() {
  return (
    <>
      <Card className="container border-0" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title className="bg-primary text-center text-white p-3 d-flex  justify-content-around">
            <div className="text-center">
              <Image
                className="imgRedondaIcono"
                variant="top"
                src="https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png"
                alt="iconos-perfil"
              />
              <div>Rodrigo</div>
            </div>
            <div className="mt-4">
              <span className="fs-6">comento a</span>
            </div>
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
            <Card.Text className="text-center fs-4">AMABLE</Card.Text>
            <Card.Text className="text-center fs-6">
              Buen Trabajo en Equipo
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
