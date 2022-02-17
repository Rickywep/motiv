import React from "react";
import { Table } from "react-bootstrap";

export default function TablaMood({ mood }) {
  const { anonimo, contenido, palabra_concepto, polaridad } = mood;
  return (
    <Table striped responsive className="tabla">
      <tbody>
        <tr>
          <td>{anonimo ? "Si" : "no"}</td>
          <td>{palabra_concepto}</td>
          <td>{polaridad}</td>
          <td>{contenido}</td>
        </tr>
      </tbody>
    </Table>
  );
}
