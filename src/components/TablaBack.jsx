import React from "react";
import { Table } from "react-bootstrap";


export default function TablaBack({ user }) {
  const { nombre, email, rol } = user;
  return (
      <Table striped  responsive className="tabla">
        <tbody>
          <tr>
            <td>{nombre}</td>
            <td>{rol}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </Table>
  );
}
