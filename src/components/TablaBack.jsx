import React from "react";
import { Table } from "react-bootstrap";


export default function TablaBack({ user }) {
  const { nombre, email, registro, rol } = user;
  return (
      <Table striped bordered hover responsive="sm">
        <tbody>
          <tr>
            <td>{nombre}</td>
            <td>{rol}</td>
            <td>{email}</td>
            <td>{registro}</td>
          </tr>
        </tbody>
      </Table>
  );
}
