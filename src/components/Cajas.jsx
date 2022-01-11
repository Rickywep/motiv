import React from "react";
import Caja from "./Caja";
const usuarios = [
  {
    id: 1,
    usuarioA: "Rodrigo",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "AMABLE",
    descripcion: "Buen Trabajo en Equipo",
    fecha: "12 de abril",
  },
  {
    id: 2,
    usuarioA: "Florencia",
    usuarioB: "Rodrigo",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    mood: "DIVERTIDO",
    descripcion: "",
    fecha: "12 de abril",
  },
  {
    id: 3,
    usuarioA: "Ricky Moreno",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641454166/1618942523622_rz1gof.jpg",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "BUEN TRABAJO",
    descripcion: "Hizo un excelente trabajo en el proyecto!",
    fecha: "12 de abril",
  },
  {
    id: 4,
    usuarioA: "Rodrigo",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "AMABLE",
    descripcion: "Buen Trabajo en Equipo",
    fecha: "12 de abril",
  },
  {
    id: 5,
    usuarioA: "Florencia",
    usuarioB: "Rodrigo",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    mood: "DIVERTIDO",
    descripcion: "",
    fecha: "12 de abril",
  },
  {
    id: 6,
    usuarioA: "Ricky Moreno",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641454166/1618942523622_rz1gof.jpg",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "BUEN TRABAJO",
    descripcion: "Hizo un excelente trabajo en el proyecto!",
    fecha: "12 de abril",
  },
  {
    id: 7,
    usuarioA: "Rodrigo",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "AMABLE",
    descripcion: "Buen Trabajo en Equipo",
    fecha: "12 de abril",
  },
  {
    id: 8,
    usuarioA: "Florencia",
    usuarioB: "Rodrigo",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    mood: "DIVERTIDO",
    descripcion: "",
    fecha: "12 de abril",
  },
  {
    id: 9,
    usuarioA: "Ricky Moreno",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641454166/1618942523622_rz1gof.jpg",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "BUEN TRABAJO",
    descripcion: "Hizo un excelente trabajo en el proyecto!",
    fecha: "12 de abril",
  },
  {
    id: 10,
    usuarioA: "Rodrigo",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "AMABLE",
    descripcion: "Buen Trabajo en Equipo",
    fecha: "12 de abril",
  },
  {
    id: 11,
    usuarioA: "Florencia",
    usuarioB: "Rodrigo",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447344/icon-5359553_960_720_ljpyfq.png",
    mood: "DIVERTIDO",
    descripcion: "",
    fecha: "12 de abril",
  },
  {
    id: 12,
    usuarioA: "Ricky Moreno",
    usuarioB: "Florencia",
    fotoA:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641454166/1618942523622_rz1gof.jpg",
    fotoB:
      "https://res.cloudinary.com/dtbfspso5/image/upload/v1641447343/icon-5359554_960_720_dmlzhr.png",
    mood: "BUEN TRABAJO",
    descripcion: "Hizo un excelente trabajo en el proyecto!",
    fecha: "12 de abril",
  },
];

export default function Cajas() {
  return (
    <div className="cajaMobile cajacomentario scroll">
      {usuarios.map((usuario, id) => (
        <Caja key={id} data={usuario} />
      ))}
    </div>
  );
}
