import React from "react";
import { getFormatPolaridad } from "../helpers/formatPolaridad";

export default function TablaMood({ mood }) {
  const { anonimo, contenido, palabra_concepto, polaridad } = mood;
  return (
    <tr>
      <td>{anonimo ? "Si" : "no"}</td>
      <td>{palabra_concepto}</td>
      <td>{getFormatPolaridad(polaridad)}</td>
      <td>{contenido}</td>
    </tr>
  );
}
